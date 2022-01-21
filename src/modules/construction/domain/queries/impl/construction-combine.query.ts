import { IQuery } from "@nestjs/cqrs";
import { ConstructionCombineRequestDto } from "../../dtos";

export class ConstructionCombineQuery implements IQuery {
    constructor(public readonly args: ConstructionCombineRequestDto) {}
}
