import { TransactionIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class MempoolResponseDto {
    @IsNotEmpty()
    transaction_identifiers: TransactionIdentifier[];

    public static of(params: Partial<MempoolResponseDto>): MempoolResponseDto {
        const mempoolResponseDto = new MempoolResponseDto();
        Object.assign(mempoolResponseDto, params);
        return mempoolResponseDto;
    }
}
