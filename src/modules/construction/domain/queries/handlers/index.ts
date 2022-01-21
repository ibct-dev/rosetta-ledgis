import { HealthCheckHandler } from "./healthcheck.handler";
import { ConstructionCombineHandler } from "./construction-combine.handler";
import { ConstructionDeriveHandler } from "./construction-derive.handler";
import { ConstructionHashHandler } from "./construction-hash.handler";
import { ConstructionMetadataHandler } from "./construction-metadata.handler";
import { ConstructionParseHandler } from "./construction-parse.handler";
import { ConstructionPayloadsHandler } from "./construction-payloads.handler";
import { ConstructionPreprocessHandler } from "./construction-preprocess.handler";
import { ConstructionSubmitHandler } from "./construction-submit.handler";

export const QueryHandlers = [
    HealthCheckHandler,
    ConstructionCombineHandler,
    ConstructionDeriveHandler,
    ConstructionHashHandler,
    ConstructionMetadataHandler,
    ConstructionParseHandler,
    ConstructionPayloadsHandler,
    ConstructionPreprocessHandler,
    ConstructionSubmitHandler
];
