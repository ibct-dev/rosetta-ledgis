import { IsString } from "class-validator";

export class SubAccountIdentifier {
    @IsString()
    address: string;

    metadata?: any;

    public static of(params: Partial<SubAccountIdentifier>): SubAccountIdentifier {
        const subAccountIdentifier = new SubAccountIdentifier();
        Object.assign(subAccountIdentifier, params);
        return subAccountIdentifier;
    }
}
