import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
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
    async accountBalance(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("coins")
    async accountCoins(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }
}
