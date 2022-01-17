import { IsNotEmpty } from "class-validator";

export class Peer {
    @IsNotEmpty()
    peer_id: string;

    metadata: any;

    public static of(params: Partial<Peer>): Peer {
        const peer = new Peer();
        Object.assign(peer, params);
        return peer;
    }
}
