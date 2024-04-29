import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateCorporateParams,
  DeleteCorporateParams,
  GetCorporateCommentsParams,
  GetCorporateCommentsResponse,
  GetCorporateFormParams,
  GetCorporateFormResponse,
  GetCorporateParams,
  GetCorporateResponse,
  UpdateCorporateParams,
} from './corporate.service.types';

export const createCorporate = async ({ formData }: CreateCorporateParams): Promise<void> => {
  await axiosInstance.post(`corporates`, formData);
};

export const getCorporate = async ({ id }: GetCorporateParams): Promise<GetCorporateResponse> => {
  const result: AxiosResponse<ResponseData<GetCorporateResponse>> = await axiosInstance.get(
    `corporates/${id}`,
  );
  return result.data.data;
};

export const updateCorporate = async ({ id, formData }: UpdateCorporateParams): Promise<void> => {
  await axiosInstance.put(`corporates/${id}`, formData);
};

export const deleteCorporate = async ({ id }: DeleteCorporateParams): Promise<void> => {
  await axiosInstance.delete(`corporates/${id}`);
};

export const getCorporateComments = async ({
  id,
}: GetCorporateCommentsParams): Promise<GetCorporateCommentsResponse> => {
  const result: AxiosResponse<ResponseData<GetCorporateCommentsResponse>> = await axiosInstance.get(
    `corporates/${id}/comments`,
  );
  return result.data.data;
};

export const getCorporateForm = async ({
  id,
}: GetCorporateFormParams): Promise<GetCorporateFormResponse> => {
  const result: AxiosResponse<ResponseData<GetCorporateFormResponse>> = await axiosInstance.get(
    `corporates/${id}/edit`,
  );
  return result.data.data;
};
