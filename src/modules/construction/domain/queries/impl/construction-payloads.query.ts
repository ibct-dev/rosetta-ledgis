import { IQuery } from "@nestjs/cqrs";
import { ConstructionPayloadsRequestDto } from "../../dtos";

export class ConstructionPayloadsQuery implements IQuery {
    constructor(public readonly args: ConstructionPayloadsRequestDto) {}
}
