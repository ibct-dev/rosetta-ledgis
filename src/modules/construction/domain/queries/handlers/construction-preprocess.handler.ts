import { QueryHandler, IQueryHandler } from "@nestjs/cqrs";
import { ConstructionPreprocessQuery } from "../impl";

@QueryHandler(ConstructionPreprocessQuery)
export class ConstructionPreprocessHandler
    implements IQueryHandler<ConstructionPreprocessQuery>
{
    constructor() {}

    async execute(command: ConstructionPreprocessQuery) {
        const { args } = command;
        const {
            network_identifier,
            operations,
            metadata,
            max_fee,
            suggested_fee_multiplier
        } = args;
    }
}
