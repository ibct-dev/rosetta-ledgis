import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { NetworkController } from "./app/network.controller";
import { NetworkService } from "./app/network.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [
        CqrsModule,
    ],
    providers: [
        { provide: "NetworkService", useClass: NetworkService },
        ...QueryHandlers
    ],
    controllers: [NetworkController]
})
export class NetworkModule {
    configure(consumer: MiddlewareConsumer) {}
}
