import { HttpStatus } from "@nestjs/common";
import { RosettaError } from ".";

export class NotFoundException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.NOT_FOUND, message, description, detail);
    }
}

export class BadRequestException extends RosettaError {
    constructor(message: string, description: string, detail?: any) {
        super(HttpStatus.BAD_REQUEST, message, description, detail);
    }
}

export class UnsupportedMediaTypeException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.UNSUPPORTED_MEDIA_TYPE, message, description, detail);
    }
}

export class ForbiddenException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.FORBIDDEN, message, description, detail);
    }
}

export class ConflictException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.CONFLICT, message, description, detail);
    }
}

export class MethodNotAllowedException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.METHOD_NOT_ALLOWED, message, description, detail);
    }
}

export class RequestTimeoutException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.REQUEST_TIMEOUT, message, description, detail);
    }
}

export class UnauthorizedException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.UNAUTHORIZED, message, description, detail);
    }
}

export class NotImplementedException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.NOT_IMPLEMENTED, message, description, detail);
    }
}

export class PayloadTooLargeException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.PAYLOAD_TOO_LARGE, message, description, detail);
    }
}

export class ValidationException extends RosettaError {
    constructor(message: string, description?: string, detail?: any) {
        super(HttpStatus.UNPROCESSABLE_ENTITY, message, description, detail);
    }
}