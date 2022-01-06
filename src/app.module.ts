import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR } from "@nestjs/core";
import { LoggingInterceptor } from "@common/interceptors/logging.interceptor";
import { BadRequestExceptionFilter } from "./common/filters/bad-request-exception.filter";
import { NetworkModule } from "./modules/network/network.module";
import { MempoolModule } from "./modules/mempool/mempool.module";
import { ConstructionModule } from "./modules/construction/construction.module";
import { BlockModule } from "./modules/block/block.module";
import { AccountModule } from "./modules/account/account.module";

@Module({
    imports: [
        NetworkModule,
        MempoolModule,
        ConstructionModule,
        BlockModule,
        AccountModule
    ],
    controllers: [],
    providers: [
        {
            provide: APP_INTERCEPTOR,
            useClass: LoggingInterceptor
        },
        {
            provide: APP_FILTER,
            useClass: BadRequestExceptionFilter
        }
    ]
})
export class AppModule {
    constructor() {}
}
