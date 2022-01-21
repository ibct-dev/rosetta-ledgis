import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { Amount, Operation } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class ConstructionPreprocessRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    operations: Operation[];

    metadata?: any;

    max_fee?: Amount[];

    suggested_fee_multiplier?: number;

    public static of(
        params: Partial<ConstructionPreprocessRequestDto>
    ): ConstructionPreprocessRequestDto {
        const constructionPreprocessRequestDto =
            new ConstructionPreprocessRequestDto();
        Object.assign(constructionPreprocessRequestDto, params);
        return constructionPreprocessRequestDto;
    }
}
