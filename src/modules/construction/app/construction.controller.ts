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

    @Post("combine")
    async constructionCombine(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("derive")
    async constructionDerive(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("hash")
    async constructionHash(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("metadata")
    async constructionMetadata(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("parse")
    async constructionParse(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("payloads")
    async constructionPayloads(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("preprocess")
    async constructionPreprocess(@Body() args: any): Promise<any> {
        try {
            const result = "";
            // const result = await this._service.networkOptions(args);
            return result;
        } catch (error: any) {
            console.error(error.message);
            throw error;
        }
    }

    @Post("submit")
    async constructionSubmit(@Body() args: any): Promise<any> {
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
