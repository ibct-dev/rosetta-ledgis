import { IsNotEmpty } from "class-validator";

export class Currency {
    @IsNotEmpty()
    symbol: string;

    @IsNotEmpty()
    decimals: number;

    metadata?: any;

    public static of(params: Partial<Currency>): Currency {
        const currency = new Currency();
        Object.assign(currency, params);
        return currency;
    }
}
