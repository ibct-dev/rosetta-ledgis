import { IQuery } from "@nestjs/cqrs";
import { MetadataRequestDto } from "../../dtos";

export class NetworkListQuery implements IQuery {
    constructor(public readonly args: MetadataRequestDto) {}
}
