import { ICommand } from "@nestjs/cqrs";
import { ConstructionHashRequestDto } from "../../dtos";

export class ConstructionHashCommand implements ICommand {
    constructor(public readonly args: ConstructionHashRequestDto) {}
}
