export class MetadataRequestDto {
    metadata?: any;

    public static of(params: Partial<MetadataRequestDto>): MetadataRequestDto {
        const metadataRequestDto = new MetadataRequestDto();
        Object.assign(metadataRequestDto, params);
        return metadataRequestDto;
    }
}
