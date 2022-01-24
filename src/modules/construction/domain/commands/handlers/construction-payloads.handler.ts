import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { NotFoundException, NotImplementedException } from "@src/shared/models/error/http.error";
import { ConstructionPayloadsCommand } from "../impl";

@CommandHandler(ConstructionPayloadsCommand)
export class ConstructionPayloadsHandler
    implements ICommandHandler<ConstructionPayloadsCommand>
{
    constructor() {}

    async execute(command: ConstructionPayloadsCommand) {
        const { args } = command;
        const { network_identifier, operations, metadata, public_keys } = args;
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            throw new NotImplementedException("Not Implemented");
            const result = "";

            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
