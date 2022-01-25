import { ICommand } from "@nestjs/cqrs";
import { ConstructionDeriveRequestDto } from "../../dtos";

export class ConstructionDeriveCommand implements ICommand {
    constructor(public readonly args: ConstructionDeriveRequestDto) {}
}
