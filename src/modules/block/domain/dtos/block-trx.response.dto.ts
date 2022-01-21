import { Transaction } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class BlockTransactionResponseDto {
    @IsNotEmpty()
    transaction: Transaction;

    public static of(
        params: Partial<BlockTransactionResponseDto>
    ): BlockTransactionResponseDto {
        const blockTransactionResponseDto = new BlockTransactionResponseDto();
        Object.assign(blockTransactionResponseDto, params);
        return blockTransactionResponseDto;
    }
}
