import { IsNotEmpty } from "class-validator";
import { Operation, RelatedTransaction } from ".";
import { TransactionIdentifier } from "../Identifiers";

export class Transaction {
    @IsNotEmpty()
    transaction_identifier: TransactionIdentifier;

    @IsNotEmpty()
    operations: Operation[];

    related_transactions?: RelatedTransaction[];

    metadata?: any;

    public static of(params: Partial<Transaction>): Transaction {
        const transaction = new Transaction();
        Object.assign(transaction, params);
        return transaction;
    }
}
