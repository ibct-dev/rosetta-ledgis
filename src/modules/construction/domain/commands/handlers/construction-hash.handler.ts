import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { NotFoundException, NotImplementedException } from "@src/shared/models/error/http.error";
import { TransactionIdentifier } from "@src/shared/models/Identifiers";
import { LedgisService } from "@src/shared/services";
import { sha256 } from "eosjs/dist/eosjs-key-conversions";
import { Inject } from "typedi";
import { TransactionIdentifierResponseDto } from "../../dtos";
import { ConstructionHashCommand } from "../impl";

@CommandHandler(ConstructionHashCommand)
export class ConstructionHashHandler
    implements ICommandHandler<ConstructionHashCommand>
{
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) { }

    async execute(command: ConstructionHashCommand) {
        const { args } = command;
        const { network_identifier, signed_transaction } = args;
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const result = new TransactionIdentifierResponseDto();
            const trx = JSON.parse(signed_transaction);
            const array: Array<number> = Object.values(trx.serializedTransaction);
            trx.serializedTransaction = Uint8Array.of(...array);
            const hash = sha256(trx.serializedTransaction);
            result.metadata = {};
            result.transaction_identifier = new TransactionIdentifier();
            result.transaction_identifier.hash = Buffer.from(hash).toString('hex');
            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
