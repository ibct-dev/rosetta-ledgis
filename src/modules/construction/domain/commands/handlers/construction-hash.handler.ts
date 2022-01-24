import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ConstructionHashCommand } from "../impl";

@CommandHandler(ConstructionHashCommand)
export class ConstructionHashHandler
    implements ICommandHandler<ConstructionHashCommand>
{
    constructor() {}

    async execute(command: ConstructionHashCommand) {
        const { args } = command;
        const { network_identifier, signed_transaction } = args;
    }
}
