import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ConstructionDeriveCommand } from "../impl";

@CommandHandler(ConstructionDeriveCommand)
export class ConstructionDeriveHandler
    implements ICommandHandler<ConstructionDeriveCommand>
{
    constructor() {}

    async execute(command: ConstructionDeriveCommand) {
        const { args } = command;
        const { network_identifier, public_key, metadata } = args;
    }
}
