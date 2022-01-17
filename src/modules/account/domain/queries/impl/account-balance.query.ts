import { IQuery } from "@nestjs/cqrs";
import { AccountBalanceRequestDto } from "../../dtos";

export class AccountBalanceQuery implements IQuery {
    constructor(public readonly args: AccountBalanceRequestDto) {}
}
