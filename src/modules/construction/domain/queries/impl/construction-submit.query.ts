import { IQuery } from "@nestjs/cqrs";
import { ConstructionSubmitRequestDto } from "../../dtos";

export class ConstructionSubmitQuery implements IQuery {
    constructor(public readonly args: ConstructionSubmitRequestDto) {}
}
