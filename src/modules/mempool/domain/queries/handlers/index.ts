import { HealthCheckHandler } from "./healthcheck.handler";
import { GetAllMempoolTrxHandler } from "./get-all-mempool-trx.handler";
import { GetMempoolTrxHandler } from "./get-mempool-trx.handler";

export const QueryHandlers = [HealthCheckHandler, GetAllMempoolTrxHandler, GetMempoolTrxHandler];
