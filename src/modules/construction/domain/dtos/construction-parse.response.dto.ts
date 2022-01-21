import { AccountIdentifier } from "@src/shared/models/Identifiers";
import { Operation } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class ConstructionParseResponseDto {
    @IsNotEmpty()
    operations: Operation[];

    signers?: string[];

    account_identifier_signers?: AccountIdentifier[];

    metadata?: any;

    public static of(
        params: Partial<ConstructionParseResponseDto>
    ): ConstructionParseResponseDto {
        const constructionParseResponseDto = new ConstructionParseResponseDto();
        Object.assign(constructionParseResponseDto, params);
        return constructionParseResponseDto;
    }
}
