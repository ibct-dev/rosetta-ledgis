import { NetworkIdentifier, PartialBlockIdentifier, TransactionIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class BlockTransactionRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    block_identifier: PartialBlockIdentifier;

    @IsNotEmpty()
    transaction_identifier: TransactionIdentifier;

    public static of(params: Partial<BlockTransactionRequestDto>): BlockTransactionRequestDto {
        const blockTransactionRequestDto = new BlockTransactionRequestDto();
        Object.assign(blockTransactionRequestDto, params);
        return blockTransactionRequestDto;
    }
}
