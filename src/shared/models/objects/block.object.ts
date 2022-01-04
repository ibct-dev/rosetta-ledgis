import { IsNotEmpty } from "class-validator";
import { Transaction } from ".";
import { BlockIdentifier } from "../Identifiers";

export class Block {
    @IsNotEmpty()
    block_identifier: BlockIdentifier;

    @IsNotEmpty()
    parent_block_identifier: BlockIdentifier;

    @IsNotEmpty()
    timestamp: number;

    @IsNotEmpty()
    transactions: Transaction[];

    metadata?: any;

    public static of(params: Partial<Block>): Block {
        const block = new Block();
        Object.assign(block, params);
        return block;
    }
}
