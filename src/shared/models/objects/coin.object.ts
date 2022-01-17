import { IsNotEmpty } from "class-validator";
import { Amount } from ".";
import { CoinIdentifier } from "../Identifiers/coin.identifier";

export class Coin {
    @IsNotEmpty()
    coin_identifier: CoinIdentifier;

    @IsNotEmpty()
    amount: Amount;

    public static of(params: Partial<Coin>): Coin {
        const coin = new Coin();
        Object.assign(coin, params);
        return coin;
    }
}
