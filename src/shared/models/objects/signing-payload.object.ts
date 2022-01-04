import { IsNotEmpty } from "class-validator";
import { SignatureType } from "../enum";
import { AccountIdentifier } from "../Identifiers";

export class SigningPayload {
    address?: string;

    account_identifier?: AccountIdentifier;

    @IsNotEmpty()
    hex_bytes: string;

    signature_type?: SignatureType;

    public static of(params: Partial<SigningPayload>): SigningPayload {
        const signingpayload = new SigningPayload();
        Object.assign(signingpayload, params);
        return signingpayload;
    }
}
