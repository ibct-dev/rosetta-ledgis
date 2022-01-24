import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ConstructionParseCommand } from "../impl";

@CommandHandler(ConstructionParseCommand)
export class ConstructionParseHandler
    implements ICommandHandler<ConstructionParseCommand>
{
    constructor() {}

    async execute(command: ConstructionParseCommand) {
        const { args } = command;
        const { network_identifier, signed, transaction } = args;
    }
}
