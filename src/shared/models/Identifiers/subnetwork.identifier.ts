import { IsString } from "class-validator";

export class SubNetworkIdentifier {
    @IsString()
    network: string;

    metadata?: any;

    public static of(params: Partial<SubNetworkIdentifier>): SubNetworkIdentifier {
        const subNetworkIdentifier = new SubNetworkIdentifier();
        Object.assign(subNetworkIdentifier, params);
        return subNetworkIdentifier;
    }
}
