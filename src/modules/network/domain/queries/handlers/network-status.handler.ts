import { Inject } from "@nestjs/common";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { Peer } from "@src/shared/models/objects";
import { LedgisService } from "@src/shared/services";
import { NetworkStatusResponseDto } from "../../dtos";
import { NetworkStatusQuery } from "../impl";

@QueryHandler(NetworkStatusQuery)
export class NetworkStatusHandler implements IQueryHandler<NetworkStatusQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) {}

    async execute(command: NetworkStatusQuery) {
        try {
            const { args } = command;
            const { network_identifier } = args;
            if (
                network_identifier.blockchain == "ledgis" &&
                network_identifier.network == "mainnet"
            ) {
                const info = await this._ledgisService.getInfo();
                const result = new NetworkStatusResponseDto();
                const current_block_identifier = {
                    hash: `0x${info.head_block_id}`,
                    index: info.head_block_num
                };
                const genesis_block_identifier = {
                    hash: `0x${info.chain_id}`,
                    index: 1
                };
                const peers: Peer[] = [];
                result.current_block_identifier = current_block_identifier;
                result.current_block_timestamp = new Date(info.head_block_time).getTime();
                result.genesis_block_identifier = genesis_block_identifier;
                result.oldest_block_identifier = current_block_identifier;
                result.peers = peers;

                return result;
            } else {
                throw new NotFoundException("blockchain or network not found");
            }
        } catch (error) {
            throw error;
        }
    }
}
