import { IQuery } from "@nestjs/cqrs";
import { GetListBodyDto } from "../../dtos";

export class GetListQuery implements IQuery {
    constructor(public readonly args: GetListBodyDto) {}
}
