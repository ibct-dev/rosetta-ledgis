import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { Signature } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class ConstructionCombineRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    unsigned_transaction: string;

    @IsNotEmpty()
    signatures: Signature[];

    public static of(
        params: Partial<ConstructionCombineRequestDto>
    ): ConstructionCombineRequestDto {
        const constructionCombineRequestDto =
            new ConstructionCombineRequestDto();
        Object.assign(constructionCombineRequestDto, params);
        return constructionCombineRequestDto;
    }
}
