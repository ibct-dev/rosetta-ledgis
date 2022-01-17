import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { NetworkRequestDto } from "@src/modules/network/domain/dtos";
import { MempoolResponseDto, MempoolTransactionRequestDto, MempoolTransactionResponseDto } from "../domain/dtos";
import { MempoolService } from "./mempool.service";

@Controller("mempool")
export class MempoolController {
    constructor(
        @Inject("MempoolService") private readonly _service: MempoolService
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


    @Post()
    async getMempool(@Body() args: NetworkRequestDto): Promise<MempoolResponseDto> {
        try {
            const result = await this._service.getAllMempoolTrx(args);
            return result;
        } catch (error) {
            throw error;
        }
    }

    @Post("transaction")
    async mempoolTransaction(@Body() args: MempoolTransactionRequestDto): Promise<MempoolTransactionResponseDto> {
        try {
            const result = await this._service.getMempoolTrx(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }
}
