import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { NotFoundException, NotImplementedException } from "@src/shared/models/error/http.error";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { ConstructionPreprocessCommand } from "../impl";

@CommandHandler(ConstructionPreprocessCommand)
export class ConstructionPreprocessHandler
    implements ICommandHandler<ConstructionPreprocessCommand>
{
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) { }

    async execute(command: ConstructionPreprocessCommand) {
        const { args } = command;
        const {
            network_identifier,
            operations,
            metadata,
            max_fee,
            suggested_fee_multiplier
        } = args;
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            return new NotImplementedException("Not Supported in LEDGIS Chain");
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
