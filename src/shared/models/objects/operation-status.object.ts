import { IsNotEmpty } from "class-validator";

export class OperationStatus {
    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    successful: boolean;

    public static of(params: Partial<OperationStatus>): OperationStatus {
        const operationstatus = new OperationStatus();
        Object.assign(operationstatus, params);
        return operationstatus;
    }
}
