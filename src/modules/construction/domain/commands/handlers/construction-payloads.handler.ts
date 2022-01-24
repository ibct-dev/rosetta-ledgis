import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ConstructionPayloadsCommand } from "../impl";

@CommandHandler(ConstructionPayloadsCommand)
export class ConstructionPayloadsHandler
    implements ICommandHandler<ConstructionPayloadsCommand>
{
    constructor() {}

    async execute(command: ConstructionPayloadsCommand) {
        const { args } = command;
        const { network_identifier, operations, metadata, public_keys } = args;
    }
}
