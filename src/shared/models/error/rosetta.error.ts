import { logger } from "@src/config/modules/winston";
import { IsNotEmpty } from "class-validator";

export class RosettaError {
    @IsNotEmpty()
    code: number;

    @IsNotEmpty()
    message: string;

    description?: string;

    @IsNotEmpty()
    retriable: boolean;

    details?: any;

    constructor(
        code: number,
        message: string,
        description?: string,
        details?: any
    ) {
        this.code = code;
        this.message = message;
        this.description = description;
        this.retriable = false;
        this.details = details;
        logger.error(
            `Error: ${this.code} - ${this.message} - ${this.description} - ${this.details}`
        );
    }
}
