import { IsNotEmpty } from "class-validator";

export class CoinIdentifier {
    @IsNotEmpty()
    identifier: string;

    public static of(params: Partial<CoinIdentifier>): CoinIdentifier {
        const coinIdentifier = new CoinIdentifier();
        Object.assign(coinIdentifier, params);
        return coinIdentifier;
    }
}
