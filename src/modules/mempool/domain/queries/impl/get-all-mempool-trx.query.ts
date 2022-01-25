import { IQuery } from "@nestjs/cqrs";
import { NetworkRequestDto } from "@src/modules/network/domain/dtos";

export class GetAllMempoolTrxQuery implements IQuery {
    constructor(public readonly args: NetworkRequestDto) {}
}
