import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { ConstructionController } from "./app/construction.controller";
import { ConstructionService } from "./app/construction.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [
        CqrsModule,
    ],
    providers: [
        { provide: "ConstructionService", useClass: ConstructionService },
        ...QueryHandlers
    ],
    controllers: [ConstructionController]
})
export class ConstructionModule {
    configure(consumer: MiddlewareConsumer) {}
}
