import { IsNotEmpty } from "class-validator";
import { Currency } from ".";

export class Amount {
    @IsNotEmpty()
    value: string;

    @IsNotEmpty()
    currency: Currency;

    metadata?: any;

    public static of(params: Partial<Amount>): Amount {
        const amount = new Amount();
        Object.assign(amount, params);
        return amount;
    }
}
