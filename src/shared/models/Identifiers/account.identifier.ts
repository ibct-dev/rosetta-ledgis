import { IsString } from "class-validator";
import { SubAccountIdentifier } from ".";

export class AccountIdentifier {
    @IsString()
    address: number;

    sub_account?: SubAccountIdentifier;

    metadata?: any;

    public static of(params: Partial<AccountIdentifier>): AccountIdentifier {
        const accountIdentifier = new AccountIdentifier();
        Object.assign(accountIdentifier, params);
        return accountIdentifier;
    }
}
