import { IQuery } from "@nestjs/cqrs";
import { ConstructionDeriveRequestDto } from "../../dtos";

export class ConstructionDeriveQuery implements IQuery {
    constructor(public readonly args: ConstructionDeriveRequestDto) {}
}
