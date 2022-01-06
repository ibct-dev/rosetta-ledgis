import { Inject } from "@nestjs/common";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { NetworkIdentifier } from "@src/shared/models/Identifiers";
import { LedgisService } from "@src/shared/services";
import { NetworkListResponseDto } from "../../dtos";
import { NetworkListQuery } from "../impl";

@QueryHandler(NetworkListQuery)
export class NetworkListHandler implements IQueryHandler<NetworkListQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) {}

    async execute(command: NetworkListQuery) {
        try {
            const { args } = command;
            const { metadata } = args;

            const info = await this._ledgisService.getInfo();

            const result: NetworkListResponseDto = {
                network_identifiers: []
            };

            const identifier: NetworkIdentifier = {
                blockchain: "ledgis",
                network: "mainnet",
                sub_network_identifier: {
                    network: "mainnet",
                    metadata: {
                        chain_id: info.chain_id,
                        producer: info.head_block_producer
                    }
                }
            };

            result.network_identifiers.push(identifier);

            return result;
        } catch (error) {
            throw error;
        }
    }
}
