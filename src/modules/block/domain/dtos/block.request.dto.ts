import {
    NetworkIdentifier,
    PartialBlockIdentifier
} from "@src/shared/models/Identifiers";
import { IsNotEmpty } from "class-validator";

export class BlockRequestDto {
    @IsNotEmpty()
    network_identifier: NetworkIdentifier;

    @IsNotEmpty()
    block_identifier: PartialBlockIdentifier;

    public static of(params: Partial<BlockRequestDto>): BlockRequestDto {
        const blockRequestDto = new BlockRequestDto();
        Object.assign(blockRequestDto, params);
        return blockRequestDto;
    }
}
