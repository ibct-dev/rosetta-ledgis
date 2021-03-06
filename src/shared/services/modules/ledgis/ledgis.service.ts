import { Inject, Injectable } from "@nestjs/common";
import { GraphQLClient } from "graphql-request";
import { print, DocumentNode } from "graphql";
import gql from "graphql-tag";
import { Api, JsonRpc } from "eosjs";
import fetch from "cross-fetch";
import { JsSignatureProvider } from "eosjs/dist/eosjs-jssig";
import { TransactResult } from "eosjs/dist/eosjs-api-interfaces";
import { Contract, deserializeActionData } from "eosjs/dist/eosjs-serialize";
import { LedgisModuleConfig } from "@src/config";
import { ConfigType } from "@nestjs/config";
import { PushTransactionArgs } from "eosjs/dist/eosjs-rpc-interfaces";
import { NotFoundException } from "@src/shared/models/error/http.error";

@Injectable()
export class LedgisService {
    private readonly rpc: JsonRpc;
    private readonly api: Api;
    private readonly contracts: Map<string, Contract> = new Map<
        string,
        Contract
    >();
    private readonly hasura: GraphQLClient;

    constructor(
        @Inject(LedgisModuleConfig.KEY)
        private readonly _config: ConfigType<typeof LedgisModuleConfig>
    ) {
        this.hasura = new GraphQLClient(this._config.hasuraEndpoint, {
            // headers: { "x-hasura-role": "anonymous" },
        });

        const signatureProvider: JsSignatureProvider = new JsSignatureProvider(
            this._config.privateKeys
        );

        this.rpc = new JsonRpc(this._config.nodeEndpoint, { fetch });
        this.api = new Api({
            rpc: this.rpc,
            signatureProvider,
            textDecoder: new TextDecoder(),
            textEncoder: new TextEncoder()
        });
        this.init().catch(() => { });
    }

    private async init() {
        this.contracts.set("led", await this.api.getContract("led", true));
        this.contracts.set(
            "led.token",
            await this.api.getContract("led.token", true)
        );
    }

    /*
     *   T1: Query Response
     *   T2: Query Variables
     */
    private async req<T1, T2>(args: {
        query: DocumentNode;
        variables?: T2;
    }): Promise<T1> {
        return await this.hasura.request<T1>(print(args.query), args.variables);
    }

    public async getInfo(): Promise<any> {
        try {
            const result = await this.rpc.get_info();
            return result;
        } catch (error) {
            return error;
        }
    }

    public async getBlock(blockNumber: number): Promise<any> {
        try {
            const result = await this.rpc.get_block(blockNumber);
            return result;
        } catch (error) {
            return error;
        }
    }

    public async accountExists(accountName: string): Promise<boolean> {
        try {
            await this.rpc.get_account(accountName);
        } catch (error) {
            return false;
        }
        return true;
    }

    public async getBalance(accountName: string): Promise<any[]> {
        const balances = await this.rpc.get_currency_balance(
            "led.token",
            accountName
        );

        const result = balances.map(b => {
            const [amount, symbolName] = b.split(" ");
            return { amount, symbolName };
        });

        return result;
    }

    public async getCurrencyStat(symbol: string): Promise<any> {
        const stats = await this.rpc.get_currency_stats("led.token", symbol);
        return stats;
    }

    public async pushSignedTransaction({ signatures, serializedTransaction, serializedContextFreeData }: PushTransactionArgs): Promise<any> {
        const trx = await this.api.pushSignedTransaction({ signatures, serializedTransaction, serializedContextFreeData });
        return trx;
    }

    public async deserializeTransaction(transaction: Uint8Array): Promise<any> {
        return await this.api.deserializeTransaction(transaction);
    }

    public async getLatestTransaction(): Promise<any> {
        const getActions = gql`
            query GetActions {
                chain_action_trace(
                    where: { creator_action_ordinal: { _eq: "0" } }
                    order_by: { block_num: desc }
                    limit: 100
                ) {
                    block_info {
                        block_num
                        timestamp
                    }
                    transaction_id
                    act_account
                    act_data
                    act_name
                    receipt_act_digest
                    creator_action_ordinal
                    receipt_receiver
                }
            }
        `;
        const data = (
            await this.req<any, any>({
                query: getActions,
            })
        ).chain_action_trace.map(a => a.transaction_id);

        if (!data) {
            throw new NotFoundException("No transaction found");
        }

        return data;
    }
    public async getTransactionData(
        transactionId: string
    ): Promise<any> {
        const data = (
            await this.req<any, any>({
                query: gql`
                    query Query($transactionId: String!) {
                        chain_action_trace(
                            where: {
                                transaction_id: { _eq: $transactionId }
                            }
                        ) {
                            act_name
                        }
                    }
                `,
                variables: {
                    transactionId,
                },
            })
        ).chain_action_trace;

        if (!data) {
            throw new NotFoundException("No transaction found");
        }

        return data;
    }
}
