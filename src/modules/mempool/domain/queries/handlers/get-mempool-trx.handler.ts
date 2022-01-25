import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { OperationIdentifier } from "@src/shared/models/Identifiers";
import { Operation, Transaction } from "@src/shared/models/objects";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { MempoolTransactionResponseDto } from "../../dtos";
import { GetMempoolTrxQuery } from "../impl";

@QueryHandler(GetMempoolTrxQuery)
export class GetMempoolTrxHandler implements IQueryHandler<GetMempoolTrxQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) { }

    async execute(command: GetMempoolTrxQuery) {
        const { args } = command;
        const { network_identifier, transaction_identifier } = args;

        const result = new MempoolTransactionResponseDto();
        let count = 0;
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            const trxHash = transaction_identifier.hash;
            const datas = await this._ledgisService.getTransactionData(trxHash);

            result.transaction = new Transaction();
            result.transaction.transaction_identifier = transaction_identifier;
            const operations = [];
            for(const data of datas){
                const object = new Operation();
                const operationIdentifier = new OperationIdentifier();
                operationIdentifier.index = count++;
                operationIdentifier.network_index = 0;
                object.operation_identifier = operationIdentifier;
                object.type = data.act_name;   
                operations.push(object); 
            }
            result.transaction.operations = operations
            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
