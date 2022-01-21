import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import {
    ConstructionCombineRequestDto,
    ConstructionCombineResponseDto,
    ConstructionDeriveRequestDto,
    ConstructionDeriveResponseDto,
    ConstructionHashRequestDto,
    ConstructionMetadataRequestDto,
    ConstructionMetadataResponseDto,
    ConstructionParseRequestDto,
    ConstructionParseResponseDto,
    ConstructionPayloadsRequestDto,
    ConstructionPayloadsResponseDto,
    ConstructionPreprocessRequestDto,
    ConstructionPreprocessResponseDto,
    ConstructionSubmitRequestDto,
    TransactionIdentifierResponseDto
} from "../domain/dtos";
import { ConstructionService } from "./construction.service";

@Controller("construction")
export class ConstructionController {
    constructor(
        @Inject("ConstructionService")
        private readonly _service: ConstructionService
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

    @Post("combine")
    async constructionCombine(
        @Body() args: ConstructionCombineRequestDto
    ): Promise<ConstructionCombineResponseDto> {
        try {
            const result = await this._service.constructionCombine(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("derive")
    async constructionDerive(
        @Body() args: ConstructionDeriveRequestDto
    ): Promise<ConstructionDeriveResponseDto> {
        try {
            const result = await this._service.constructionDerive(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("hash")
    async constructionHash(
        @Body() args: ConstructionHashRequestDto
    ): Promise<TransactionIdentifierResponseDto> {
        try {
            const result = await this._service.constructionHash(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("metadata")
    async constructionMetadata(
        @Body() args: ConstructionMetadataRequestDto
    ): Promise<ConstructionMetadataResponseDto> {
        try {
            const result = await this._service.constructionMetadata(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("parse")
    async constructionParse(
        @Body() args: ConstructionParseRequestDto
    ): Promise<ConstructionParseResponseDto> {
        try {
            const result = await this._service.constructionParse(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("payloads")
    async constructionPayloads(
        @Body() args: ConstructionPayloadsRequestDto
    ): Promise<ConstructionPayloadsResponseDto> {
        try {
            const result = await this._service.constructionPayloads(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("preprocess")
    async constructionPreprocess(
        @Body() args: ConstructionPreprocessRequestDto
    ): Promise<ConstructionPreprocessResponseDto> {
        try {
            const result = await this._service.constructionPreprocess(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("submit")
    async constructionSubmit(
        @Body() args: ConstructionSubmitRequestDto
    ): Promise<TransactionIdentifierResponseDto> {
        try {
            const result = await this._service.constructionSubmit(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }
}
