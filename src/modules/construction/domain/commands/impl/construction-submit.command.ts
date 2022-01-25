import { ICommand } from "@nestjs/cqrs";
import { ConstructionSubmitRequestDto } from "../../dtos";

export class ConstructionSubmitCommand implements ICommand {
    constructor(public readonly args: ConstructionSubmitRequestDto) {}
}
