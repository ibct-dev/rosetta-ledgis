import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { Operation, PublicKey } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class ConstructionPayloadsRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    operations: Operation[];

    metadata?: any;

    public_keys?: PublicKey[];

    public static of(
        params: Partial<ConstructionPayloadsRequestDto>
    ): ConstructionPayloadsRequestDto {
        const constructionPayloadsRequestDto =
            new ConstructionPayloadsRequestDto();
        Object.assign(constructionPayloadsRequestDto, params);
        return constructionPayloadsRequestDto;
    }
}
