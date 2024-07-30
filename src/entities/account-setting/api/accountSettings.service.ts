import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  GetAccountSettingsResponse,
  UpdateAccountSettingsParams,
  UpdateAccountSettingsResponse,
} from './accountSettings.service.types';

export const getAccountSettings = async (): Promise<GetAccountSettingsResponse> => {
  const result: AxiosResponse<ResponseData<GetAccountSettingsResponse>> = await axiosInstance.get(
    `account_setting`,
  );
  return result.data.data;
};

export const updateAccountSettings = async ({
  formData,
}: UpdateAccountSettingsParams): Promise<UpdateAccountSettingsResponse> => {
  const result: AxiosResponse<ResponseData<UpdateAccountSettingsResponse>> =
    await axiosInstance.put(`account_setting`, formData);
  return result.data.data;
};
