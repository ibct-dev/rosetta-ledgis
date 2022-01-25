import { ICommand } from "@nestjs/cqrs";
import { ConstructionPreprocessRequestDto } from "../../dtos";

export class ConstructionPreprocessCommand implements ICommand {
    constructor(public readonly args: ConstructionPreprocessRequestDto) {}
}
