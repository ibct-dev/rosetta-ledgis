import { IQuery } from "@nestjs/cqrs";
import { BlockTransactionRequestDto } from "../../dtos";

export class GetBlockTransactionQuery implements IQuery {
    constructor(public readonly args: BlockTransactionRequestDto) { }
}
