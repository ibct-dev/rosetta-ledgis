import { logger } from "@src/config/modules/winston";

export class RosettaError {
    private code;
    private message;
    private description;
    private retriable;
    private details;
    constructor(code: number, message: string, description: string, details?: any) {
        this.code = code;
        this.message = message;
        this.description = description;
        this.retriable = false;
        this.details = details;
        logger.error(`Error: ${this.code} - ${this.message} - ${this.description} - ${this.details}`);
    }
}
