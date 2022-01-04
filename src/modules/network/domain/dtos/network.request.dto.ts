import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class NetworkRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    metadata?: any;

    public static of(params: Partial<NetworkRequestDto>): NetworkRequestDto {
        const networkRequestDto = new NetworkRequestDto();
        Object.assign(networkRequestDto, params);
        return networkRequestDto;
    }
}
