import { ICommand } from "@nestjs/cqrs";
import { ConstructionParseRequestDto } from "../../dtos";

export class ConstructionParseCommand implements ICommand {
    constructor(public readonly args: ConstructionParseRequestDto) {}
}
