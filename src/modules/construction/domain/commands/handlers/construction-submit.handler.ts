import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { ConstructionSubmitCommand } from "../impl";

@CommandHandler(ConstructionSubmitCommand)
export class ConstructionSubmitHandler
    implements ICommandHandler<ConstructionSubmitCommand>
{
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) {}

    async execute(command: ConstructionSubmitCommand) {
        const { args } = command;
        const { network_identifier, signed_transaction } = args;
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const result = await this._ledgisService.pushSignedTransaction(JSON.parse(signed_transaction));

            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
