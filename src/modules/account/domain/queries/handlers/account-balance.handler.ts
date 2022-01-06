import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { BlockIdentifier } from "@src/shared/models/Identifiers";
import { Amount } from "@src/shared/models/objects";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { AccountBalanceResponseDto } from "../../dtos";
import { AccountBalanceQuery } from "../impl";

@QueryHandler(AccountBalanceQuery)
export class AccountBalanceHandler implements IQueryHandler<AccountBalanceQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) { }


    async execute(command: AccountBalanceQuery) {
        const { args } = command;
        const { network_identifier, account_identifier, block_identifier, currencies } = args;

        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const info = await this._ledgisService.getInfo();
            const result = new AccountBalanceResponseDto();
            result.block_identifier = new BlockIdentifier();
            result.block_identifier = {
                hash: `0x${info.head_block_id}`,
                index: info.head_block_num,
            }
            const lists = [];
            if (!currencies) {
                lists.push("LED");
            } else {
                for (const currency of currencies) {
                    lists.push(currency.symbol);
                }
            }
            const balances = await this._ledgisService.getBalance(account_identifier.address);
            result.balances = balances.map(balance => {
                return {
                    value: balance.amount,
                    currency: {
                        symbol: balance.symbolName,
                        decimals: balance.amount.split(".")[1].length,
                    },
                }
            }).filter(it => lists.includes(it.currency.symbol));
            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
