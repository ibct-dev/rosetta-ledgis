import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { LedgisModule } from "@src/shared/services";
import { NetworkController } from "./app/network.controller";
import { NetworkService } from "./app/network.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [
        LedgisModule,
        CqrsModule,
    ],
    providers: [
        { provide: "NetworkService", useClass: NetworkService },
        ...QueryHandlers
    ],
    controllers: [NetworkController]
})
export class NetworkModule {}
