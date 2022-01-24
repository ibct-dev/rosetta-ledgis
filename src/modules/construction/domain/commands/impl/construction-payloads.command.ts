import { ICommand } from "@nestjs/cqrs";
import { ConstructionPayloadsRequestDto } from "../../dtos";

export class ConstructionPayloadsCommand implements ICommand {
    constructor(public readonly args: ConstructionPayloadsRequestDto) {}
}
