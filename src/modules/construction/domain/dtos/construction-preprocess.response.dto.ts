import { AccountIdentifier } from "@src/shared/models/Identifiers";

export class ConstructionPreprocessResponseDto {
    options?: any;

    required_public_keys?: AccountIdentifier[];

    public static of(
        params: Partial<ConstructionPreprocessResponseDto>
    ): ConstructionPreprocessResponseDto {
        const constructionPreprocessResponseDto =
            new ConstructionPreprocessResponseDto();
        Object.assign(constructionPreprocessResponseDto, params);
        return constructionPreprocessResponseDto;
    }
}
