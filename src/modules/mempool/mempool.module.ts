import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { LedgisModule } from "@src/shared/services";
import { MempoolController } from "./app/mempool.controller";
import { MempoolService } from "./app/mempool.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [CqrsModule, LedgisModule],
    providers: [
        { provide: "MempoolService", useClass: MempoolService },
        ...QueryHandlers
    ],
    controllers: [MempoolController]
})
export class MempoolModule {
    configure(consumer: MiddlewareConsumer) {}
}
