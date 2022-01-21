import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ConstructionParseQuery } from "../impl";

@QueryHandler(ConstructionParseQuery)
export class ConstructionParseHandler
    implements IQueryHandler<ConstructionParseQuery>
{
    constructor() {}

    async execute(command: ConstructionParseQuery) {
        const { args } = command;
        const { network_identifier, signed, transaction } = args;
    }
}
