import { IsNotEmpty } from "class-validator";
import { BalanceExemption, OperationStatus } from ".";
import { RosettaError } from "../error";

export class Allow {
    @IsNotEmpty()
    operation_statuses: OperationStatus[];

    @IsNotEmpty()
    operation_types: string[];

    @IsNotEmpty()
    errors: RosettaError[];

    @IsNotEmpty()
    historical_balance_lookup: boolean;

    timestamp_start_index?: number;

    @IsNotEmpty()
    call_methods: string[];

    @IsNotEmpty()
    balance_exemptions: BalanceExemption[];

    @IsNotEmpty()
    mempool_coins: boolean;

    public static of(params: Partial<Allow>): Allow {
        const allow = new Allow();
        Object.assign(allow, params);
        return allow;
    }
}
