import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ConstructionCombineQuery } from "../impl";

@QueryHandler(ConstructionCombineQuery)
export class ConstructionCombineHandler
    implements IQueryHandler<ConstructionCombineQuery>
{
    constructor() {}

    async execute(command: ConstructionCombineQuery) {
        const { args } = command;
        const { network_identifier, unsigned_transaction, signatures } = args;
    }
}
