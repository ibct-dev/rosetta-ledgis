import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import {
    MetadataRequestDto,
    NetworkListResponseDto,
    NetworkOptionsResponseDto,
    NetworkRequestDto,
    NetworkStatusResponseDto
} from "../domain/dtos";
import {
    HealthCheckQuery,
    NetworkListQuery,
    NetworkOptionsQuery,
    NetworkStatusQuery
} from "../domain/queries/impl";

@Injectable()
export class NetworkService {
    constructor(
        private readonly _commandBus: CommandBus,
        private readonly _queryBus: QueryBus
    ) {}

    public async healthCheck(): Promise<any> {
        try {
            const result = await this._queryBus.execute(new HealthCheckQuery());
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async networkList(
        args: MetadataRequestDto
    ): Promise<NetworkListResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new NetworkListQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async networkOptions(
        args: NetworkRequestDto
    ): Promise<NetworkOptionsResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new NetworkOptionsQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async networkStatus(
        args: NetworkRequestDto
    ): Promise<NetworkStatusResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new NetworkStatusQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}
