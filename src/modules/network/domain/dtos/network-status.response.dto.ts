import {
    BlockIdentifier,
} from "@src/shared/models/Identifiers";
import { Peer, SyncStatus } from "@src/shared/models/objects";
import { IsNotEmpty } from "class-validator";

export class NetworkStatusResponseDto {
    @IsNotEmpty()
    current_block_identifier: BlockIdentifier;

    @IsNotEmpty()
    current_block_timestamp: number;

    @IsNotEmpty()
    genesis_block_identifier: BlockIdentifier;

    oldest_block_identifier: BlockIdentifier;

    sync_status: SyncStatus;

    @IsNotEmpty()
    peers: Peer[];

    public static of(
        params: Partial<NetworkStatusResponseDto>
    ): NetworkStatusResponseDto {
        const networkStatusResponseDto = new NetworkStatusResponseDto();
        Object.assign(networkStatusResponseDto, params);
        return networkStatusResponseDto;
    }
}
