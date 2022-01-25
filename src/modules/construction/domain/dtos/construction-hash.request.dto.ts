import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class ConstructionHashRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    signed_transaction: string;

    public static of(
        params: Partial<ConstructionHashRequestDto>
    ): ConstructionHashRequestDto {
        const constructionHashRequestDto = new ConstructionHashRequestDto();
        Object.assign(constructionHashRequestDto, params);
        return constructionHashRequestDto;
    }
}
