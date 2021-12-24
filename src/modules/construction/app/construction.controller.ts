import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { ConstructionService } from "./construction.service";

@Controller("construction")
export class ConstructionController {
    constructor(@Inject("ConstructionService") private readonly _service: ConstructionService) {}

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
