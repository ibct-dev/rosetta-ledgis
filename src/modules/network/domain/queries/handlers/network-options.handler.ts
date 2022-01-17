import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { config } from "@src/config";
import { NotFoundException } from "@src/shared/models/error/http.error";
import { Allow, OperationStatus, Version } from "@src/shared/models/objects";
import { NetworkOptionsResponseDto } from "../../dtos";
import { NetworkOptionsQuery } from "../impl";

@QueryHandler(NetworkOptionsQuery)
export class NetworkOptionsHandler
    implements IQueryHandler<NetworkOptionsQuery>
{
    constructor() { }

    async execute(command: NetworkOptionsQuery) {
        try {
            const { args } = command;
            const { network_identifier } = args;
            if (
                network_identifier.blockchain == "ledgis" &&
                network_identifier.network == "mainnet"
            ) {
                const result = new NetworkOptionsResponseDto();
                result.version = new Version();
                result.allow = new Allow();
                const operation_statuses: OperationStatus[] = [];
                operation_statuses.push(
                    {
                        status: "SUCCESS",
                        successful: true
                    },
                    {
                        status: "FAILED",
                        successful: false
                    }
                );
                const operation_types: string[] = [];
                operation_types.push(
                    "TRANSFER",
                    "STAKING",
                    "UNSTAKING",
                    "VOTE",
                    "BUYSERVICE"
                );
                const version = {
                    rosetta_version: config.version,
                    node_version: config.nodeVersion
                }
                result.version = version;
                result.allow.operation_statuses = operation_statuses;
                result.allow.operation_types = operation_types;
                result.allow.errors = [];
                result.allow.historical_balance_lookup = false;
                result.allow.call_methods = [];
                result.allow.balance_exemptions = [];
                result.allow.mempool_coins = false;

                return result;
            } else {
                throw new NotFoundException("blockchain or network not found");
            }
        } catch (error) {
            throw error;
        }
    }
}
