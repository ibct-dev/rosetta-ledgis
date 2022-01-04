import { IQuery } from "@nestjs/cqrs";
import { NetworkRequestDto } from "../../dtos";

export class NetworkOptionsQuery implements IQuery {
    constructor(public readonly args: NetworkRequestDto) {}
}
