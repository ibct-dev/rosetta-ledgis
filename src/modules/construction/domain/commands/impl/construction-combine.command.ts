import { ICommand } from "@nestjs/cqrs";
import { ConstructionCombineRequestDto } from "../../dtos";

export class ConstructionCombineCommand implements ICommand {
    constructor(public readonly args: ConstructionCombineRequestDto) {}
}
