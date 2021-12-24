import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { MempoolService } from "./mempool.service";

@Controller("mempool")
export class MempoolController {
    constructor(@Inject("MempoolService") private readonly _service: MempoolService) {}

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
