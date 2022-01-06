import { registerAs } from "@nestjs/config";

export default registerAs("ledgis", () => ({
    nodeEndpoint: process.env.LEDGIS_ENDPOINT || "",
    privateKeys: process.env.LEDGIS_PRIVATE_KEYS
        ? process.env.LEDGIS_PRIVATE_KEYS.split(" ")
        : [],
    hasuraEndpoint: process.env.LEDGIS_HASURA_ENDPOINT || ""
}));
