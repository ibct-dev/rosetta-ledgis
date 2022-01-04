import { IsNotEmpty } from "class-validator";
import { CoinAction } from "../enum";
import { CoinIdentifier } from "../Identifiers/coin.identifier";

export class CoinChange {
    @IsNotEmpty()
    coin_identifier: CoinIdentifier;

    @IsNotEmpty()
    coin_action: CoinAction[];

    public static of(params: Partial<CoinChange>): CoinChange {
        const coinchange = new CoinChange();
        Object.assign(coinchange, params);
        return coinchange;
    }
}
