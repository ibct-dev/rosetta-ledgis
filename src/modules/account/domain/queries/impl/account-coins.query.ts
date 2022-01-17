import { IQuery } from "@nestjs/cqrs";
import { AccountCoinsRequestDto } from "../../dtos";

export class AccountCoinsQuery implements IQuery {
    constructor(public readonly args: AccountCoinsRequestDto) {}
}
