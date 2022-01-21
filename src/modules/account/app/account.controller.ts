import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import {
    AccountBalanceRequestDto,
    AccountBalanceResponseDto,
    AccountCoinsRequestDto,
    AccountCoinsResponseDto
} from "../domain/dtos";
import { AccountService } from "./account.service";

@Controller("account")
export class AccountController {
    constructor(
        @Inject("AccountService") private readonly _service: AccountService
    ) {}

    @Get()
    async healthCheck(): Promise<any> {
        try {
            const result = await this._service.healthCheck();
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Post("balance")
    async accountBalance(
        @Body() args: AccountBalanceRequestDto
    ): Promise<AccountBalanceResponseDto> {
        try {
            const result = await this._service.accountBalance(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("coins")
    async accountCoins(
        @Body() args: AccountCoinsRequestDto
    ): Promise<AccountCoinsResponseDto> {
        try {
            const result = await this._service.accountCoins(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }
}
