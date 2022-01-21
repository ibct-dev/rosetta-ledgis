import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ConstructionDeriveQuery } from "../impl";

@QueryHandler(ConstructionDeriveQuery)
export class ConstructionDeriveHandler
    implements IQueryHandler<ConstructionDeriveQuery>
{
    constructor() {}

    async execute(command: ConstructionDeriveQuery) {
        const { args } = command;
        const { network_identifier, public_key, metadata } = args;
    }
}
