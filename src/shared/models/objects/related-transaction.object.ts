import { IsNotEmpty } from "class-validator";
import { Direction } from "../enum";
import { NetworkIdentifier, TransactionIdentifier } from "../Identifiers";

export class RelatedTransaction {
    network_identifier?: NetworkIdentifier;

    @IsNotEmpty()
    transaction_identifier: TransactionIdentifier;

    @IsNotEmpty()
    direction: Direction;

    public static of(params: Partial<RelatedTransaction>): RelatedTransaction {
        const relatedtransaction = new RelatedTransaction();
        Object.assign(relatedtransaction, params);
        return relatedtransaction;
    }
}
