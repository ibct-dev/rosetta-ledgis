import { Inject } from "@nestjs/common";
import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { LedgisService } from "@src/shared/services";
import { NetworkOptionsResponseDto } from "../../dtos";
import { NetworkOptionsQuery } from "../impl";

@QueryHandler(NetworkOptionsQuery)
export class NetworkOptionsHandler implements IQueryHandler<NetworkOptionsQuery> {
    constructor(
        @Inject("LedgisService")
        private readonly _ledgisService: LedgisService
    ) { }

    async execute(command: NetworkOptionsQuery) {
        try {
            const { args } = command;
            const { network_identifier } = args;
            const result = new NetworkOptionsResponseDto();


            return result;
        } catch (error) {
            throw error
        }
    }
}
