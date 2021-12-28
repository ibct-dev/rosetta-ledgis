import { IsNotEmpty } from "class-validator";

export class SubNetworkIdentifier {
    @IsNotEmpty()
    network: string;

    metadata?: any;

    public static of(params: Partial<SubNetworkIdentifier>): SubNetworkIdentifier {
        const subNetworkIdentifier = new SubNetworkIdentifier();
        Object.assign(subNetworkIdentifier, params);
        return subNetworkIdentifier;
    }
}
