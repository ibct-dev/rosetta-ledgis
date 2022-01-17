import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { BadRequestException, NotFoundException } from "@src/shared/models/error/http.error";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { BlockTransactionResponseDto } from "../../dtos";
import { GetBlockTransactionQuery } from "../impl";

@QueryHandler(GetBlockTransactionQuery)
export class GetBlockTransactionHandler implements IQueryHandler<GetBlockTransactionQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) { }

    async execute(command: GetBlockTransactionQuery) {
        const { args } = command;
        const { network_identifier, block_identifier, transaction_identifier } = args;

        const result = new BlockTransactionResponseDto();
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const blockNumber = block_identifier.index;
            const block = await this._ledgisService.getBlock(blockNumber);
            if (`0x${block.id}` !== block_identifier.hash) {
                throw new BadRequestException("block hash is not correct");
            }
            let flag = false;
            for (const transaction of block.transactions) {
                const hash = transaction.trx.id;
                if (`0x${hash}` === transaction_identifier.hash) {
                    flag = true;
                    break;
                }
            }

            if (!flag) {
                throw new BadRequestException("transaction hash is not exist in block");
            }
            const operation = {
                operation_identifier: {
                    index: 0
                },
                type: ""
            } as any;

            result.transaction = {
                transaction_identifier: transaction_identifier,
                operations: [operation]
            }

            return "a";
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
