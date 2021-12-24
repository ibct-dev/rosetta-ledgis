import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { AccountService } from "./account.service";

@Controller("account")
export class AccountController {
    constructor(@Inject("AccountService") private readonly _service: AccountService) {}

    @Get()
    async healthCheck(): Promise<any> {
        try {
            const result = await this._service.healthCheck();
            return result;
        } catch (error) {
            throw error;
        }
    }
}
