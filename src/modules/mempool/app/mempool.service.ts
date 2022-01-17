import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { NetworkRequestDto } from "@src/modules/network/domain/dtos";
import { MempoolResponseDto, MempoolTransactionRequestDto, MempoolTransactionResponseDto } from "../domain/dtos";
import { GetAllMempoolTrxQuery, GetMempoolTrxQuery, HealthCheckQuery } from "../domain/queries/impl";

@Injectable()
export class MempoolService {
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

    public async getAllMempoolTrx(args: NetworkRequestDto): Promise<MempoolResponseDto> {
        try {
            const result = await this._queryBus.execute(new GetAllMempoolTrxQuery(args));
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async getMempoolTrx(args: MempoolTransactionRequestDto): Promise<MempoolTransactionResponseDto> {
        try {
            const result = await this._queryBus.execute(new GetMempoolTrxQuery(args));
            return result;
        } catch (error) {
            throw error;
        }
    }

}
