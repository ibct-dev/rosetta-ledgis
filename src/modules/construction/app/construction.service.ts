import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import {
    ConstructionCombineRequestDto,
    ConstructionCombineResponseDto,
    ConstructionDeriveRequestDto,
    ConstructionDeriveResponseDto,
    ConstructionHashRequestDto,
    TransactionIdentifierResponseDto,
    ConstructionMetadataRequestDto,
    ConstructionMetadataResponseDto,
    ConstructionParseRequestDto,
    ConstructionParseResponseDto,
    ConstructionPayloadsRequestDto,
    ConstructionPayloadsResponseDto,
    ConstructionPreprocessRequestDto,
    ConstructionPreprocessResponseDto,
    ConstructionSubmitRequestDto
} from "../domain/dtos";
import {
    ConstructionCombineQuery,
    ConstructionDeriveQuery,
    ConstructionHashQuery,
    ConstructionMetadataQuery,
    ConstructionParseQuery,
    ConstructionPayloadsQuery,
    ConstructionPreprocessQuery,
    ConstructionSubmitQuery,
    HealthCheckQuery
} from "../domain/queries/impl";

@Injectable()
export class ConstructionService {
    constructor(
        private readonly _commandBus: CommandBus,
        private readonly _queryBus: QueryBus
    ) {}

    public async healthCheck(): Promise<any> {
        try {
            const result = await this._queryBus.execute(new HealthCheckQuery());
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async constructionCombine(
        args: ConstructionCombineRequestDto
    ): Promise<ConstructionCombineResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new ConstructionCombineQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async constructionDerive(
        args: ConstructionDeriveRequestDto
    ): Promise<ConstructionDeriveResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new ConstructionDeriveQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async constructionHash(
        args: ConstructionHashRequestDto
    ): Promise<TransactionIdentifierResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new ConstructionHashQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async constructionMetadata(
        args: ConstructionMetadataRequestDto
    ): Promise<ConstructionMetadataResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new ConstructionMetadataQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async constructionParse(
        args: ConstructionParseRequestDto
    ): Promise<ConstructionParseResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new ConstructionParseQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async constructionPayloads(
        args: ConstructionPayloadsRequestDto
    ): Promise<ConstructionPayloadsResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new ConstructionPayloadsQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async constructionPreprocess(
        args: ConstructionPreprocessRequestDto
    ): Promise<ConstructionPreprocessResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new ConstructionPreprocessQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    public async constructionSubmit(
        args: ConstructionSubmitRequestDto
    ): Promise<TransactionIdentifierResponseDto> {
        try {
            const result = await this._queryBus.execute(
                new ConstructionSubmitQuery(args)
            );
            return result;
        } catch (error) {
            throw error;
        }
    }
}
