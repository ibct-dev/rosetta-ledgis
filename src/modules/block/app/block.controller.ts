import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { BlockService } from "./block.service";

@Controller("block")
export class BlockController {
    constructor(@Inject("BlockService") private readonly _service: BlockService) {}

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
