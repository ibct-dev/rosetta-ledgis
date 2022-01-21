import { SigningPayload } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class ConstructionPayloadsResponseDto {
    @IsNotEmpty()
    unsigned_transaction: string;

    @IsNotEmpty()
    payloads: SigningPayload[];

    public static of(
        params: Partial<ConstructionPayloadsResponseDto>
    ): ConstructionPayloadsResponseDto {
        const constructionPayloadsResponseDto =
            new ConstructionPayloadsResponseDto();
        Object.assign(constructionPayloadsResponseDto, params);
        return constructionPayloadsResponseDto;
    }
}
