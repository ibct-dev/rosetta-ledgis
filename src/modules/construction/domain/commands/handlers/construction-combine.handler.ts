import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { NotFoundException, NotImplementedException } from "@src/shared/models/error/http.error";
import { ConstructionCombineResponseDto } from "../../dtos";
import { ConstructionCombineCommand } from "../impl";

@CommandHandler(ConstructionCombineCommand)
export class ConstructionCombineHandler
    implements ICommandHandler<ConstructionCombineCommand>
{
    constructor() { }

    async execute(command: ConstructionCombineCommand) {
        const { args } = command;
        const { network_identifier, unsigned_transaction, signatures } = args;
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const result = new ConstructionCombineResponseDto;
            const trx = JSON.parse(unsigned_transaction);
            const array: Array<number> = Object.values(trx.serializedTransaction);
            trx.serializedTransaction = Uint8Array.of(...array);
            trx.signatures = signatures.map(a => a.hex_bytes);
            result.signed_transaction = JSON.stringify(trx);
            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
