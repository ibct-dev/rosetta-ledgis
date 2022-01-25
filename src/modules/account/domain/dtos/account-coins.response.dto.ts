import { BlockIdentifier } from "@src/shared/models/Identifiers";
import { Amount } from "@src/shared/models/objects";
import { Coin } from "@src/shared/models/objects/coin.object";
import { IsNotEmpty } from "class-validator";

export class AccountCoinsResponseDto {
    @IsNotEmpty()
    block_identifier: BlockIdentifier;

    @IsNotEmpty()
    coins: Coin[];

    metadata?: any;

    public static of(
        params: Partial<AccountCoinsResponseDto>
    ): AccountCoinsResponseDto {
        const accountCoinsResponseDto = new AccountCoinsResponseDto();
        Object.assign(accountCoinsResponseDto, params);
        return accountCoinsResponseDto;
    }
}
