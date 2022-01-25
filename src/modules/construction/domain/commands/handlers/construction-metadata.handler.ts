import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { NotFoundException, NotImplementedException } from "@src/shared/models/error/http.error";
import { ConstructionMetadataResponseDto } from "../../dtos";
import { ConstructionMetadataCommand } from "../impl";

@CommandHandler(ConstructionMetadataCommand)
export class ConstructionMetadataHandler
    implements ICommandHandler<ConstructionMetadataCommand>
{
    constructor() {}

    async execute(command: ConstructionMetadataCommand) {
        const { args } = command;
        const { network_identifier, options, public_keys } = args;
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {            
            const result = new ConstructionMetadataResponseDto();
            result.metadata = {};
            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
