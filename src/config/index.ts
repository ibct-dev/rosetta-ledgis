/* eslint-disable @typescript-eslint/no-empty-function */
import { config as _config } from "dotenv";
_config({ path: __dirname + "/../../.env" });
(process as any).send = process.send || function () {};

import LedgisModuleConfig from "./modules/ledgis";

export const config = {
    // Base
    isProduction: process.env.NODE_ENV === "production",
    // General
    appName: process.env.APP_NAME || "boilerplate",
    appTitle: process.env.APP_TITLE || "boilerplate",
    appDescription: process.env.APP_DESCRIPTION || "boilerplate",
    // Server
    host: process.env.HOST || "0.0.0.0",
    port: parseInt(process.env.PORT) || 8080,
    rateLimitMax: process.env.RATE_LIMIT_MAX || 10000,
    version: process.env.VERSION || "0.0.1",
    nodeVersion: process.env.NODE_VERSION || "14.17-alpine3.14"
};

export { LedgisModuleConfig };
