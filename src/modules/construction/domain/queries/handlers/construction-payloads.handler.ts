import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ConstructionPayloadsQuery } from "../impl";

@QueryHandler(ConstructionPayloadsQuery)
export class ConstructionPayloadsHandler
    implements IQueryHandler<ConstructionPayloadsQuery>
{
    constructor() {}

    async execute(command: ConstructionPayloadsQuery) {
        const { args } = command;
        const { network_identifier, operations, metadata, public_keys } = args;
    }
}
