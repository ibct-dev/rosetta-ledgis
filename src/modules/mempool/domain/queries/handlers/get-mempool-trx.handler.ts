import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { Transaction } from "@src/shared/models/objects";
import { MempoolTransactionResponseDto } from "../../dtos";
import { GetMempoolTrxQuery } from "../impl";

@QueryHandler(GetMempoolTrxQuery)
export class GetMempoolTrxHandler implements IQueryHandler<GetMempoolTrxQuery> {
    constructor() {}

    async execute(command: GetMempoolTrxQuery) {
        const { args } = command;
        const { network_identifier, transaction_identifier } = args;

        const result = new MempoolTransactionResponseDto();
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            // TODO: What is EOSIO mempool?
            const trxObject = new Transaction();
            result.transaction = trxObject;

            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
