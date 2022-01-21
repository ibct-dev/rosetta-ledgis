import { IQuery } from "@nestjs/cqrs";
import { ConstructionHashRequestDto } from "../../dtos";

export class ConstructionHashQuery implements IQuery {
    constructor(public readonly args: ConstructionHashRequestDto) {}
}
