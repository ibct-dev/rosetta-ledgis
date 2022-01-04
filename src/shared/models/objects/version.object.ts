import { IsNotEmpty } from "class-validator";

export class Version {
    @IsNotEmpty()
    rosetta_version: string;

    @IsNotEmpty()
    node_version: string;

    middleware_version?: string;

    metadata?: any;

    public static of(params: Partial<Version>): Version {
        const version = new Version();
        Object.assign(version, params);
        return version;
    }
}
