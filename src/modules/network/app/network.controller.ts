import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { GetListBodyDto } from "../domain/dtos";
import { NetworkService } from "./network.service";

@Controller("network")
export class NetworkController {
    constructor(
        @Inject("NetworkService") private readonly _service: NetworkService,
    ) { }

    @Get()
    async healthCheck(): Promise<any> {
        try {
            const result = await this._service.healthCheck();
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("list")
    async getList(@Body() args: GetListBodyDto): Promise<any> {
        try {
            const result = await this._service.getList(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }
}
