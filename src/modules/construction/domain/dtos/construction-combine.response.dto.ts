import { IsNotEmpty } from "class-validator";

export class ConstructionCombineResponseDto {
    @IsNotEmpty()
    signed_transaction: string;

    public static of(
        params: Partial<ConstructionCombineResponseDto>
    ): ConstructionCombineResponseDto {
        const constructionCombineResponseDto =
            new ConstructionCombineResponseDto();
        Object.assign(constructionCombineResponseDto, params);
        return constructionCombineResponseDto;
    }
}
