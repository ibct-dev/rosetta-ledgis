import { IsNotEmpty } from "class-validator";
import { Currency, PublicKey, SigningPayload } from ".";
import { SignatureType } from "../enum";

export class Signature {
    @IsNotEmpty()
    signing_payload: SigningPayload;

    @IsNotEmpty()
    public_key: PublicKey;

    @IsNotEmpty()
    signature_type: SignatureType;

    @IsNotEmpty()
    hex_bytes: string;

    public static of(params: Partial<Signature>): Signature {
        const signature = new Signature();
        Object.assign(signature, params);
        return signature;
    }
}
