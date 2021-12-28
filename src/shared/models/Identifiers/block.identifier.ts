import { IsNotEmpty } from "class-validator";

export class BlockIdentifier {
    @IsNotEmpty()
    index: number;

    @IsNotEmpty()
    hash: string;

    public static of(params: Partial<BlockIdentifier>): BlockIdentifier {
        const blockIdentifier = new BlockIdentifier();
        Object.assign(blockIdentifier, params);
        return blockIdentifier;
    }
}
