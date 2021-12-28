import { IsNotEmpty } from "class-validator";

export class SubAccountIdentifier {
    @IsNotEmpty()
    address: string;

    metadata?: any;

    public static of(params: Partial<SubAccountIdentifier>): SubAccountIdentifier {
        const subAccountIdentifier = new SubAccountIdentifier();
        Object.assign(subAccountIdentifier, params);
        return subAccountIdentifier;
    }
}
