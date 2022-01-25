import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class ConstructionDeriveRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    public_key: string;

    metadata?: any;

    public static of(
        params: Partial<ConstructionDeriveRequestDto>
    ): ConstructionDeriveRequestDto {
        const constructionDeriveRequestDto = new ConstructionDeriveRequestDto();
        Object.assign(constructionDeriveRequestDto, params);
        return constructionDeriveRequestDto;
    }
}
