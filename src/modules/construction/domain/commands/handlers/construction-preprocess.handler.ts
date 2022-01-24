import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ConstructionPreprocessCommand } from "../impl";

@CommandHandler(ConstructionPreprocessCommand)
export class ConstructionPreprocessHandler
    implements ICommandHandler<ConstructionPreprocessCommand>
{
    constructor() {}

    async execute(command: ConstructionPreprocessCommand) {
        const { args } = command;
        const {
            network_identifier,
            operations,
            metadata,
            max_fee,
            suggested_fee_multiplier
        } = args;
    }
}
