import { IQuery } from "@nestjs/cqrs";
import { ConstructionParseRequestDto } from "../../dtos";

export class ConstructionParseQuery implements IQuery {
    constructor(public readonly args: ConstructionParseRequestDto) {}
}
