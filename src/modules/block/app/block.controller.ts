import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { BlockService } from "./block.service";

@Controller("block")
export class BlockController {
    constructor(
        @Inject("BlockService") private readonly _service: BlockService
    ) {}

    @Get()
    async getBlock(): Promise<any> {
        try {
            const result = await this._service.healthCheck();
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Post("transaction")
    async blockTransaction(@Body() args: any): Promise<any> {
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
