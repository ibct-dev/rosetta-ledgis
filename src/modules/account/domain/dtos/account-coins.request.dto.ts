import {
    AccountIdentifier,
    NetworkIdentifier,
    PartialBlockIdentifier
} from "@src/shared/models/Identifiers";
import { Currency } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class AccountCoinsRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    account_identifier: AccountIdentifier;

    @IsNotEmpty()
    include_mempool: boolean;

    currencies?: Currency[];

    public static of(
        params: Partial<AccountCoinsRequestDto>
    ): AccountCoinsRequestDto {
        const accountCoinsRequestDto = new AccountCoinsRequestDto();
        Object.assign(accountCoinsRequestDto, params);
        return accountCoinsRequestDto;
    }
}
