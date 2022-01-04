import { IsNotEmpty } from "class-validator";
import { SubNetworkIdentifier } from ".";

export class NetworkIdentifier {
    @IsNotEmpty()
    blockchain: string;

    @IsNotEmpty()
    network: string;

    sub_network_identifier?: SubNetworkIdentifier;

    public static of(params: Partial<NetworkIdentifier>): NetworkIdentifier {
        const networkIdentifier = new NetworkIdentifier();
        Object.assign(networkIdentifier, params);
        return networkIdentifier;
    }
}
