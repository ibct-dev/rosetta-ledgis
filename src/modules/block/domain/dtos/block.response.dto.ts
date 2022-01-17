import { TransactionIdentifier } from "@src/shared/models/Identifiers";
import { Block } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class BlockResponseDto {
    @IsNotEmpty()
    block: Block;

    @IsNotEmpty()
    other_transactions: TransactionIdentifier[];

    public static of(params: Partial<BlockResponseDto>): BlockResponseDto {
        const blockResponseDto = new BlockResponseDto();
        Object.assign(blockResponseDto, params);
        return blockResponseDto;
    }
}
