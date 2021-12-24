import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { BlockController } from "./app/block.controller";
import { BlockService } from "./app/block.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [
        CqrsModule,
    ],
    providers: [
        { provide: "BlockService", useClass: BlockService },
        ...QueryHandlers
    ],
    controllers: [BlockController]
})
export class BlockModule {
    configure(consumer: MiddlewareConsumer) {}
}
