import { ICommand } from "@nestjs/cqrs";
import { ConstructionMetadataRequestDto } from "../../dtos";

export class ConstructionMetadataCommand implements ICommand {
    constructor(public readonly args: ConstructionMetadataRequestDto) {}
}
