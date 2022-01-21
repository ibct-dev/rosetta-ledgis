import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ConstructionMetadataQuery } from "../impl";

@QueryHandler(ConstructionMetadataQuery)
export class ConstructionMetadataHandler
    implements IQueryHandler<ConstructionMetadataQuery>
{
    constructor() {}

    async execute(command: ConstructionMetadataQuery) {
        const { args } = command;
        const { network_identifier, options, public_keys } = args;
    }
}
