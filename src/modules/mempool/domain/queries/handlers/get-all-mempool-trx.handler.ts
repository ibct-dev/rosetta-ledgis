import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { TransactionIdentifier } from "@src/shared/models/Identifiers";
import { MempoolResponseDto } from "../../dtos";
import { GetAllMempoolTrxQuery } from "../impl";

@QueryHandler(GetAllMempoolTrxQuery)
export class GetAllMempoolTrxHandler
    implements IQueryHandler<GetAllMempoolTrxQuery>
{
    constructor() {}

    async execute(command: GetAllMempoolTrxQuery) {
        const { args } = command;
        const { network_identifier, metadata } = args;

        const result = new MempoolResponseDto();
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            // TODO: What is EOSIO mempool?
            const object = new TransactionIdentifier();
            result.transaction_identifiers = [];
            result.transaction_identifiers.push(object);

            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
