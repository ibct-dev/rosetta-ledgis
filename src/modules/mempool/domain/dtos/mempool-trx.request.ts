import {
    NetworkIdentifier,
    TransactionIdentifier
} from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class MempoolTransactionRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    transaction_identifier: TransactionIdentifier;

    public static of(
        params: Partial<MempoolTransactionRequestDto>
    ): MempoolTransactionRequestDto {
        const mempoolTransactionRequestDto = new MempoolTransactionRequestDto();
        Object.assign(mempoolTransactionRequestDto, params);
        return mempoolTransactionRequestDto;
    }
}
