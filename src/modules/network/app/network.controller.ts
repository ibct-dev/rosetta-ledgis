import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
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
        } catch (error) {
            throw error;
        }
    }
}
