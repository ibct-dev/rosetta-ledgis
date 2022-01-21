import { NotFoundException } from "@nestjs/common";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { BlockIdentifier } from "@src/shared/models/Identifiers";
import { Coin } from "@src/shared/models/objects/coin.object";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { AccountCoinsResponseDto } from "../../dtos";
import { AccountCoinsQuery } from "../impl";

@QueryHandler(AccountCoinsQuery)
export class AccountCoinsHandler implements IQueryHandler<AccountCoinsQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) {}

    async execute(command: AccountCoinsQuery) {
        const { args } = command;
        const {
            network_identifier,
            account_identifier,
            include_mempool,
            currencies
        } = args;

        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const info = await this._ledgisService.getInfo();
            const result = new AccountCoinsResponseDto();
            result.block_identifier = new BlockIdentifier();
            result.block_identifier = {
                hash: `0x${info.head_block_id}`,
                index: info.head_block_num
            };
            const lists = [];
            if (!currencies) {
                lists.push("LED");
            } else {
                for (const currency of currencies) {
                    lists.push(currency.symbol);
                }
            }
            const coins = await this._ledgisService.getBalance(
                account_identifier.address
            );
            result.coins = coins
                .map(balance => {
                    return {
                        coin_identifier: {
                            identifier: "led.token"
                        },
                        amount: {
                            value: balance.amount,
                            currency: {
                                symbol: balance.symbolName,
                                decimals: balance.amount.split(".")[1].length
                            }
                        }
                    };
                })
                .filter(it => lists.includes(it.amount.currency.symbol));
            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
