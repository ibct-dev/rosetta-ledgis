import { AccountIdentifier } from "@src/shared/models/Identifiers";

export class ConstructionDeriveResponseDto {
    address?: string;

    account_identifier?: AccountIdentifier;

    metadata?: any;

    public static of(
        params: Partial<ConstructionDeriveResponseDto>
    ): ConstructionDeriveResponseDto {
        const constructionDeriveResponseDto =
            new ConstructionDeriveResponseDto();
        Object.assign(constructionDeriveResponseDto, params);
        return constructionDeriveResponseDto;
    }
}
