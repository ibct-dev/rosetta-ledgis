import { IsNotEmpty } from "class-validator";

export class OperationIdentifier {
    @IsNotEmpty()
    index: number;

    network_index?: number;

    public static of(
        params: Partial<OperationIdentifier>
    ): OperationIdentifier {
        const operationIdentifier = new OperationIdentifier();
        Object.assign(operationIdentifier, params);
        return operationIdentifier;
    }
}
