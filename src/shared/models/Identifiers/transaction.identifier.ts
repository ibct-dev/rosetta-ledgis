import { IsNotEmpty } from "class-validator";

export class TransactionIdentifier {
    @IsNotEmpty()
    hash: string;

    public static of(
        params: Partial<TransactionIdentifier>
    ): TransactionIdentifier {
        const transactionIdentifier = new TransactionIdentifier();
        Object.assign(transactionIdentifier, params);
        return transactionIdentifier;
    }
}
