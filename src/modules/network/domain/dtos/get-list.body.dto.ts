export class GetListBodyDto {
    metadata?: any;

    public static of(params: Partial<GetListBodyDto>): GetListBodyDto {
        const getListBodyDto = new GetListBodyDto();
        Object.assign(getListBodyDto, params);
        return getListBodyDto;
    }
}
