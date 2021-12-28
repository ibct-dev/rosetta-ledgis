import { IsNumber, IsString } from "class-validator";

export class BlockIdentifier {
    @IsNumber()
    index: number;

    @IsString()
    hash: string;

    public static of(params: Partial<BlockIdentifier>): BlockIdentifier {
        const blockIdentifier = new BlockIdentifier();
        Object.assign(blockIdentifier, params);
        return blockIdentifier;
    }
}
