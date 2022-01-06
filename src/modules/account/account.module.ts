import { MiddlewareConsumer, Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";
import { LedgisModule } from "@src/shared/services";
import { AccountController } from "./app/account.controller";
import { AccountService } from "./app/account.service";
import { QueryHandlers } from "./domain/queries/handlers";

@Module({
    imports: [LedgisModule, CqrsModule],
    providers: [
        { provide: "AccountService", useClass: AccountService },
        ...QueryHandlers
    ],
    controllers: [AccountController]
})
export class AccountModule {
    configure(consumer: MiddlewareConsumer) {}
}
