import { IsNotEmpty } from "class-validator";
import { Amount } from ".";
import { AccountIdentifier, OperationIdentifier } from "../Identifiers";
import { CoinChange } from "./coinchange.object";

export class Operation {
    @IsNotEmpty()
    operation_identifier: OperationIdentifier;

    related_operations?: OperationIdentifier[];

    @IsNotEmpty()
    type: string;

    status?: string;

    account: AccountIdentifier;

    amount?: Amount;

    coin_change?: CoinChange;
    
    metadata?: any;

    public static of(params: Partial<Operation>): Operation {
        const operation = new Operation();
        Object.assign(operation, params);
        return operation;
    }
}
