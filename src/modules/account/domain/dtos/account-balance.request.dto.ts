import { AccountIdentifier, NetworkIdentifier, PartialBlockIdentifier } from "@src/shared/models/Identifiers";
import { Currency } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class AccountBalanceRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    account_identifier: AccountIdentifier;

    block_identifier?: PartialBlockIdentifier;

    currencies?: Currency[];

    public static of(params: Partial<AccountBalanceRequestDto>): AccountBalanceRequestDto {
        const accountBalanceRequestDto = new AccountBalanceRequestDto();
        Object.assign(accountBalanceRequestDto, params);
        return accountBalanceRequestDto;
    }
}
