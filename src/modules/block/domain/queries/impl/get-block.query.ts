import { IQuery } from "@nestjs/cqrs";
import { BlockRequestDto } from "../../dtos";

export class GetBlockQuery implements IQuery {
    constructor(public readonly args: BlockRequestDto) {}
}
