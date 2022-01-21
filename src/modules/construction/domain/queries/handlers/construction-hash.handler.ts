import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ConstructionHashQuery } from "../impl";

@QueryHandler(ConstructionHashQuery)
export class ConstructionHashHandler
    implements IQueryHandler<ConstructionHashQuery>
{
    constructor() {}

    async execute(command: ConstructionHashQuery) {
        const { args } = command;
        const { network_identifier, signed_transaction } = args;
    }
}
