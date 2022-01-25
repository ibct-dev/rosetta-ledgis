import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class ConstructionSubmitRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    signed_transaction: string;

    public static of(
        params: Partial<ConstructionSubmitRequestDto>
    ): ConstructionSubmitRequestDto {
        const constructionSubmitRequestDto = new ConstructionSubmitRequestDto();
        Object.assign(constructionSubmitRequestDto, params);
        return constructionSubmitRequestDto;
    }
}
