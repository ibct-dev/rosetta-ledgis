import { IsString } from "class-validator";
import { SubNetworkIdentifier } from ".";

export class NetworkIdentifier {
    @IsString()
    blockchain: string;

    @IsString()
    network: string;

    sub_network_identifier?: SubNetworkIdentifier;

    public static of(params: Partial<NetworkIdentifier>): NetworkIdentifier {
        const networkIdentifier = new NetworkIdentifier();
        Object.assign(networkIdentifier, params);
        return networkIdentifier;
    }
}
