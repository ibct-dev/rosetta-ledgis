import { IQuery } from "@nestjs/cqrs";
import { NetworkRequestDto } from "../../dtos";

export class NetworkStatusQuery implements IQuery {
    constructor(public readonly args: NetworkRequestDto) {}
}
