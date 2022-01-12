import { IQuery } from "@nestjs/cqrs";
import { MempoolTransactionRequestDto } from "../../dtos";

export class GetMempoolTrxQuery implements IQuery {
    constructor(public readonly data: MempoolTransactionRequestDto) {}
}
