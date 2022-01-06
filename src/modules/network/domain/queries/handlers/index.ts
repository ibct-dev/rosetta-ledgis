import { HealthCheckHandler } from "./healthcheck.handler";
import { NetworkListHandler } from "./network-list.handler";
import { NetworkOptionsHandler } from "./network-options.handler";
import { NetworkStatusHandler } from "./network-status.handler";

export const QueryHandlers = [HealthCheckHandler, NetworkListHandler, NetworkOptionsHandler, NetworkStatusHandler];
