import { Currency } from ".";
import { ExemptionType } from "../enum";

export class BalanceExemption {
    sub_account_address?: string;

    currency?: Currency;

    exemption_type?: ExemptionType;

    public static of(params: Partial<BalanceExemption>): BalanceExemption {
        const balanceexemption = new BalanceExemption();
        Object.assign(balanceexemption, params);
        return balanceexemption;
    }
}
