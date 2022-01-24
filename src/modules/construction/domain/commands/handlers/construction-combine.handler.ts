import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ConstructionCombineCommand } from "../impl";

@CommandHandler(ConstructionCombineCommand)
export class ConstructionCombineHandler
    implements ICommandHandler<ConstructionCombineCommand>
{
    constructor() {}

    async execute(command: ConstructionCombineCommand) {
        const { args } = command;
        const { network_identifier, unsigned_transaction, signatures } = args;
    }
}
