import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { GetListBodyDto } from "../domain/dtos";
import { GetListQuery, HealthCheckQuery } from "../domain/queries/impl";

@Injectable()
export class NetworkService {
    constructor(
        private readonly _commandBus: CommandBus,
        private readonly _queryBus: QueryBus
    ) { }

    public async healthCheck(): Promise<any> {
        try {
            const result = await this._queryBus.execute(new HealthCheckQuery());
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async getList(args: GetListBodyDto): Promise<any> {
        try {
            const result = await this._queryBus.execute(new GetListQuery(args));
            return result;
        } catch (error) {
            throw error;
        }
    }

}
