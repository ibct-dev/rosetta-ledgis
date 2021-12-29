import { Version } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class NetworkOptionsResponseDto {
    @IsNotEmpty()
    version: Version;

    @IsNotEmpty()
    allow: any/*Allow*/;

    public static of(params: Partial<NetworkOptionsResponseDto>): NetworkOptionsResponseDto {
        const networkOptionsResponseDto = new NetworkOptionsResponseDto();
        Object.assign(networkOptionsResponseDto, params);
        return networkOptionsResponseDto;
    }
}
