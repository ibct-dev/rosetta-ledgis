import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ConstructionSubmitCommand } from "../impl";

@CommandHandler(ConstructionSubmitCommand)
export class ConstructionSubmitHandler
    implements ICommandHandler<ConstructionSubmitCommand>
{
    constructor() {}

    async execute(command: ConstructionSubmitCommand) {
        const { args } = command;
        const { network_identifier, signed_transaction } = args;
    }
}
