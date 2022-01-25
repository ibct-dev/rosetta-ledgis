import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { OperationIdentifier } from "@src/shared/models/Identifiers";
import { Operation } from "@src/shared/models/objects";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { ConstructionParseCommand } from "../impl";

@CommandHandler(ConstructionParseCommand)
export class ConstructionParseHandler
    implements ICommandHandler<ConstructionParseCommand>
{
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) { }

    async execute(command: ConstructionParseCommand) {
        const { args } = command;
        const { network_identifier, signed, transaction } = args;
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const result = [];
            const trx = JSON.parse(transaction);
            const array: Array<number> = Object.values(trx.serializedTransaction);
            const deserializedTrx =
                await this._ledgisService.deserializeTransaction(Uint8Array.of(...array));
            let count = 0;
            for (const action of deserializedTrx.actions) {
                const object = new Operation();
                const operationIdentifier = new OperationIdentifier();
                operationIdentifier.index = count++;
                operationIdentifier.network_index = 0;
                const type = action.name;
                object.operation_identifier = operationIdentifier;
                object.type = type;
                result.push(object);
            }
            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
