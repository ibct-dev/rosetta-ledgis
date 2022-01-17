import { BlockIdentifier } from "@src/shared/models/Identifiers";
import { Amount } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class AccountBalanceResponseDto {
    @IsNotEmpty()
    block_identifier: BlockIdentifier;

    @IsNotEmpty()
    balances: Amount[];

    metadata?: any;

    public static of(params: Partial<AccountBalanceResponseDto>): AccountBalanceResponseDto {
        const accountBalanceResponseDto = new AccountBalanceResponseDto();
        Object.assign(accountBalanceResponseDto, params);
        return accountBalanceResponseDto;
    }
}
