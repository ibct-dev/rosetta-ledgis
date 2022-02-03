import { Body, Controller, Get, HttpCode, Inject, Post } from "@nestjs/common";
import {
    MetadataRequestDto,
    NetworkListResponseDto,
    NetworkOptionsResponseDto,
    NetworkRequestDto,
    NetworkStatusResponseDto
} from "../domain/dtos";
import { NetworkService } from "./network.service";

@Controller("network")
export class NetworkController {
    constructor(
        @Inject("NetworkService") private readonly _service: NetworkService
    ) {}

    @Get()
    async healthCheck(): Promise<any> {
        try {
            const result = await this._service.healthCheck();
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    @Post("list")
    @HttpCode(200)
    async networkList(
        @Body() args: MetadataRequestDto
    ): Promise<NetworkListResponseDto> {
        try {
            const result = await this._service.networkList(args);
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    @Post("options")
    @HttpCode(200)
    async networkOptions(
        @Body() args: NetworkRequestDto
    ): Promise<NetworkOptionsResponseDto> {
        try {
            const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            throw error;
        }
    }

    @Post("status")
    @HttpCode(200)
    async networkStatus(
        @Body() args: NetworkRequestDto
    ): Promise<NetworkStatusResponseDto> {
        try {
            const result = await this._service.networkStatus(args);
            return result;
        } catch (error: any) {
            throw error;
        }
    }
}
