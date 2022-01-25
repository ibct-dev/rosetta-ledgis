import { HealthCheckHandler } from "./healthcheck.handler";
import { AccountBalanceHandler } from "./account-balance.handler";
import { AccountCoinsHandler } from "./account-coins.handler";

export const QueryHandlers = [
    HealthCheckHandler,
    AccountBalanceHandler,
    AccountCoinsHandler
];
