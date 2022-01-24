import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ConstructionMetadataCommand } from "../impl";

@CommandHandler(ConstructionMetadataCommand)
export class ConstructionMetadataHandler
    implements ICommandHandler<ConstructionMetadataCommand>
{
    constructor() {}

    async execute(command: ConstructionMetadataCommand) {
        const { args } = command;
        const { network_identifier, options, public_keys } = args;
    }
}
