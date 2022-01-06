export class SyncStatus {
    current_index?: number;

    target_index?: number;

    stage?: string;

    synced?: boolean;

    public static of(params: Partial<SyncStatus>): SyncStatus {
        const syncstatus = new SyncStatus();
        Object.assign(syncstatus, params);
        return syncstatus;
    }
}
