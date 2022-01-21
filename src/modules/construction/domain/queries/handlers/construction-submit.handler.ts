import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ConstructionSubmitQuery } from "../impl";

@QueryHandler(ConstructionSubmitQuery)
export class ConstructionSubmitHandler
    implements IQueryHandler<ConstructionSubmitQuery>
{
    constructor() {}

    async execute(command: ConstructionSubmitQuery) {
        const { args } = command;
        const { network_identifier, signed_transaction } = args;
    }
}
