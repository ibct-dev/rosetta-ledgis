import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { MempoolService } from "./mempool.service";

@Controller("mempool")
export class MempoolController {
    constructor(
        @Inject("MempoolService") private readonly _service: MempoolService
    ) {}

    @Get()
    async getMempool(): Promise<any> {
        try {
            const result = await this._service.healthCheck();
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Post("transaction")
    async mempoolTransaction(@Body() args: any): Promise<any> {
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
