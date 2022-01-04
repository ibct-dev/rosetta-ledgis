import { IsNotEmpty } from "class-validator";
import { CurveType } from "../enum";

export class PublicKey {
    @IsNotEmpty()
    hex_bytes: string;

    @IsNotEmpty()
    curve_type: CurveType;

    public static of(params: Partial<PublicKey>): PublicKey {
        const publickey = new PublicKey();
        Object.assign(publickey, params);
        return publickey;
    }
}
