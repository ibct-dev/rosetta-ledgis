import { IsNotEmpty } from "class-validator";

export class PartialBlockIdentifier {
    @IsNotEmpty()
    index: number;

    @IsNotEmpty()
    hash: string;

    public static of(params: Partial<PartialBlockIdentifier>): PartialBlockIdentifier {
        const partialBlockIdentifier = new PartialBlockIdentifier();
        Object.assign(partialBlockIdentifier, params);
        return partialBlockIdentifier;
    }
}
