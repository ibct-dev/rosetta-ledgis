import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import {
    BadRequestException,
    NotFoundException
} from "@src/shared/models/error/http.error";
import {
    BlockIdentifier,
    TransactionIdentifier
} from "@src/shared/models/Identifiers";
import { Block, Transaction } from "@src/shared/models/objects";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { BlockResponseDto } from "../../dtos";
import { GetBlockQuery } from "../impl";

@QueryHandler(GetBlockQuery)
export class GetBlockHandler implements IQueryHandler<GetBlockQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) {}

    async execute(command: GetBlockQuery) {
        const { args } = command;
        const { network_identifier, block_identifier } = args;

        const result = new BlockResponseDto();
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const blockNumber = block_identifier.index;
            const block = await this._ledgisService.getBlock(blockNumber);
            if (`0x${block.id}` !== block_identifier.hash) {
                throw new BadRequestException("block hash is not correct");
            }
            const prevBlockIdentifier = new BlockIdentifier();
            if (blockNumber > 1) {
                const prevBlock = await this._ledgisService.getBlock(
                    blockNumber - 1
                );
                prevBlockIdentifier.index = blockNumber - 1;
                prevBlockIdentifier.hash = prevBlock.id;
            }
            result.block = new Block();
            result.block.block_identifier = {
                index: blockNumber,
                hash: block.id
            };
            result.block.parent_block_identifier = prevBlockIdentifier;
            result.block.timestamp = new Date(block.timestamp).getTime() / 1000;
            result.block.transactions = [];

            let count = 0;
            for (const transaction of block.transactions) {
                const object: Transaction = {
                    transaction_identifier: { hash: "" },
                    operations: []
                };
                const hash = transaction.trx.id;
                object.transaction_identifier.hash = hash;
                const operation = {
                    operation_identifier: {
                        index: count++
                    },
                    type: ""
                } as any;
                object.operations.push(operation);
                result.block.transactions.push(object);
            }

            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
