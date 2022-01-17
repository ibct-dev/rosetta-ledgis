import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { BlockRequestDto, BlockResponseDto, BlockTransactionRequestDto, BlockTransactionResponseDto } from "../domain/dtos";
import { GetBlockQuery, GetBlockTransactionQuery } from "../domain/queries/impl";

@Injectable()
export class BlockService {
    constructor(
        private readonly _commandBus: CommandBus,
        private readonly _queryBus: QueryBus
    ) { }

    public async getBlock(args: BlockRequestDto): Promise<BlockResponseDto> {
        try {
            const result = await this._queryBus.execute(new GetBlockQuery(args));
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async getBlockTransaction(args: BlockTransactionRequestDto): Promise<BlockTransactionResponseDto> {
        try {
            const result = await this._queryBus.execute(new GetBlockTransactionQuery(args));
            return result;
        } catch (error) {
            throw error;
        }
    }
}
