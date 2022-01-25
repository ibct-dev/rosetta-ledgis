import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { NotImplementedException } from "@src/shared/models/error/http.error";
import { ConstructionDeriveCommand } from "../impl";

@CommandHandler(ConstructionDeriveCommand)
export class ConstructionDeriveHandler
    implements ICommandHandler<ConstructionDeriveCommand>
{
    constructor() { }

    async execute(command: ConstructionDeriveCommand) {
        const { args } = command;
        const { network_identifier, public_key, metadata } = args;
        return new NotImplementedException("Not Supported in LEDGIS Chain");
    }
}
