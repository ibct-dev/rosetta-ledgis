import { Amount } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class ConstructionMetadataResponseDto {
    @IsNotEmpty()
    metadata: any;

    suggested_fee: Amount[];

    public static of(
        params: Partial<ConstructionMetadataResponseDto>
    ): ConstructionMetadataResponseDto {
        const constructionMetadataResponseDto =
            new ConstructionMetadataResponseDto();
        Object.assign(constructionMetadataResponseDto, params);
        return constructionMetadataResponseDto;
    }
}
