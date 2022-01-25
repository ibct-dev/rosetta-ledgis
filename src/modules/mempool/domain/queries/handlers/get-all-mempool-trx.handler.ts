import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { TransactionIdentifier } from "@src/shared/models/Identifiers";
import { LedgisService } from "@src/shared/services";
import { Inject } from "typedi";
import { MempoolResponseDto } from "../../dtos";
import { GetAllMempoolTrxQuery } from "../impl";

@QueryHandler(GetAllMempoolTrxQuery)
export class GetAllMempoolTrxHandler
    implements IQueryHandler<GetAllMempoolTrxQuery>
{
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) {}

    async execute(command: GetAllMempoolTrxQuery) {
        const { args } = command;
        const { network_identifier, metadata } = args;

        const result = new MempoolResponseDto();
        if (
            network_identifier.blockchain == "ledgis" &&
            network_identifier.network == "mainnet"
        ) {
            result.transaction_identifiers = [];
            const trxHashs = await this._ledgisService.getLatestTransaction();
            for (const trxHash of trxHashs) {
                result.transaction_identifiers.push({hash: trxHash});
            }

            return result;
        } else {
            throw new NotFoundException("blockchain or network not found");
        }
    }
}
