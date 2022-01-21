import { Body, Controller, Inject, Post } from "@nestjs/common";
import {
    BlockRequestDto,
    BlockResponseDto,
    BlockTransactionRequestDto,
    BlockTransactionResponseDto
} from "../domain/dtos";
import { BlockService } from "./block.service";

@Controller("block")
export class BlockController {
    constructor(
        @Inject("BlockService") private readonly _service: BlockService
    ) {}

    @Post()
    async getBlock(@Body() args: BlockRequestDto): Promise<BlockResponseDto> {
        try {
            const result = await this._service.getBlock(args);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Post("transaction")
    async getBlockTransaction(
        @Body() args: BlockTransactionRequestDto
    ): Promise<BlockTransactionResponseDto> {
        try {
            const result = await this._service.getBlockTransaction(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }
}
