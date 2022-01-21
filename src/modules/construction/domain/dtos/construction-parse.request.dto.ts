import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class ConstructionParseRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    signed: boolean;

    @IsNotEmpty()
    transaction: string;

    public static of(
        params: Partial<ConstructionParseRequestDto>
    ): ConstructionParseRequestDto {
        const constructionParseRequestDto = new ConstructionParseRequestDto();
        Object.assign(constructionParseRequestDto, params);
        return constructionParseRequestDto;
    }
}
