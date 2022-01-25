import { Transaction } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class MempoolTransactionResponseDto {
    @IsNotEmpty()
    transaction: Transaction;

    metadata?: any;

    public static of(
        params: Partial<MempoolTransactionResponseDto>
    ): MempoolTransactionResponseDto {
        const mempoolTransactionResponseDto =
            new MempoolTransactionResponseDto();
        Object.assign(mempoolTransactionResponseDto, params);
        return mempoolTransactionResponseDto;
    }
}
