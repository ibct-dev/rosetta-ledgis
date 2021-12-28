import { IsString } from "class-validator";

export class CoinIdentifier {
    @IsString()
    identifier: string;

    public static of(params: Partial<CoinIdentifier>): CoinIdentifier {
        const coinIdentifier = new CoinIdentifier();
        Object.assign(coinIdentifier, params);
        return coinIdentifier;
    }
}
