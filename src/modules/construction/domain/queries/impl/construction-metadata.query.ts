import { IQuery } from "@nestjs/cqrs";
import { ConstructionMetadataRequestDto } from "../../dtos";

export class ConstructionMetadataQuery implements IQuery {
    constructor(public readonly args: ConstructionMetadataRequestDto) {}
}
