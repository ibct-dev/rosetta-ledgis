import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import {
    AccountBalanceRequestDto,
    AccountBalanceResponseDto,
    AccountCoinsRequestDto,
    AccountCoinsResponseDto
} from "../domain/dtos";
import {
    AccountBalanceQuery,
    AccountCoinsQuery,
    HealthCheckQuery
} from "../domain/queries/impl";

@Injectable()
export class AccountService {
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

    public async accountBalance(
        args: AccountBalanceRequestDto
    ): Promise<AccountBalanceResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new AccountBalanceQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async accountCoins(
        args: AccountCoinsRequestDto
    ): Promise<AccountCoinsResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new AccountCoinsQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}
