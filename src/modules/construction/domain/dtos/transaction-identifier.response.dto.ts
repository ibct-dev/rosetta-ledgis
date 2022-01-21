import { TransactionIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class TransactionIdentifierResponseDto {
    @IsNotEmpty()
    transaction_identifier: TransactionIdentifier;

    metadata?: any;

    public static of(
        params: Partial<TransactionIdentifierResponseDto>
    ): TransactionIdentifierResponseDto {
        const transactionIdentifierResponseDto =
            new TransactionIdentifierResponseDto();
        Object.assign(transactionIdentifierResponseDto, params);
        return transactionIdentifierResponseDto;
    }
}
