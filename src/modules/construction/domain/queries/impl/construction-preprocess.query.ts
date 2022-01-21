import { IQuery } from "@nestjs/cqrs";
import { ConstructionPreprocessRequestDto } from "../../dtos";

export class ConstructionPreprocessQuery implements IQuery {
    constructor(public readonly args: ConstructionPreprocessRequestDto) {}
}
