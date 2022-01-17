import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class NetworkListResponseDto {
    @IsNotEmpty()
    network_identifiers: NetworkIdentifier[];

    public static of(
        params: Partial<NetworkListResponseDto>
    ): NetworkListResponseDto {
        const networkListResponseDto = new NetworkListResponseDto();
        Object.assign(networkListResponseDto, params);
        return networkListResponseDto;
    }
}
