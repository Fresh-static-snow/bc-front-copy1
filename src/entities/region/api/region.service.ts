import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import { GetSearchRegionsResponse, SearchRegionsParams } from './region.service.types';

export const searchRegions = async ({
  term,
}: SearchRegionsParams): Promise<GetSearchRegionsResponse> => {
  const result: AxiosResponse<ResponseData<GetSearchRegionsResponse>> = await axiosInstance.get(
    'regions',
    { params: { term } },
  );
  return result.data.data;
};
