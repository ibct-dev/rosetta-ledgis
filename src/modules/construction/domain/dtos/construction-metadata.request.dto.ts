import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { PublicKey } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class ConstructionMetadataRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    options?: any;

    public_keys?: PublicKey[];

    public static of(
        params: Partial<ConstructionMetadataRequestDto>
    ): ConstructionMetadataRequestDto {
        const constructionMetadataRequestDto =
            new ConstructionMetadataRequestDto();
        Object.assign(constructionMetadataRequestDto, params);
        return constructionMetadataRequestDto;
    }
}
