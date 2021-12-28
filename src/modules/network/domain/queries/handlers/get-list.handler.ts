import { Inject } from "@nestjs/common";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { LedgisService } from "@src/shared/services";
import { GetListQuery } from "../impl";

@QueryHandler(GetListQuery)
export class GetListHandler implements IQueryHandler<GetListQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) { }

    async execute(command: GetListQuery) {
        const { args } = command;
        const { metadata } = args;

        const info = await this._ledgisService.getinfo();

        const result = { network_identifiers: [] };
        const identifier = {
            blockchain: "ledgis",
            network: "mainnet",
            sub_network_identifier: {
                network: "mainnet",
                metadata: {
                    chain_id: info.chain_id,
                    producer: info.head_block_producer
                }
            }
        }
        result.network_identifiers.push(identifier);

        return result;
    }
}
