import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  ChangeBrandingStatusParams,
  CreateBrandingParams,
  DeleteBrandingParams,
  GetBrandingFormParams,
  GetBrandingFormResponse,
  GetBrandingMainResponse,
  GetBrandingParams,
  GetBrandingResponse,
  GetSearchBrandingResponse,
  PreDeleteBrandingParams,
  RestorePreDeletedBrandingParams,
  Scope,
  SearchBrandingParams,
  UpdateBrandingParams,
} from './branding.service.types';

export const createBranding = async ({ formData }: CreateBrandingParams): Promise<void> => {
  await axiosInstance.post(`branding`, formData);
};

export const getBranding = async ({ id }: GetBrandingParams): Promise<GetBrandingResponse> => {
  const result: AxiosResponse<ResponseData<GetBrandingResponse>> = await axiosInstance.get(
    `branding/${id}`,
  );
  return result.data.data;
};

export const getBrandingMain = async (): Promise<GetBrandingMainResponse> => {
  const result: AxiosResponse<ResponseData<GetBrandingMainResponse>> = await axiosInstance.get(
    `branding/main`,
  );
  return result.data.data;
};

export const updateBranding = async ({ id, formData }: UpdateBrandingParams): Promise<void> => {
  await axiosInstance.put(`branding/${id}`, formData);
};

export const changeBrandingStatus = async ({
  formData,
}: ChangeBrandingStatusParams): Promise<void> => {
  await axiosInstance.put(`branding/change`, formData);
};

export const restorePreDeletedBranding = async ({
  id,
}: RestorePreDeletedBrandingParams): Promise<void> => {
  await axiosInstance.put(`branding/${id}/restore`);
};

export const preDeleteBranding = async ({
  id,
  hide_history,
}: PreDeleteBrandingParams): Promise<void> => {
  await axiosInstance.delete(`branding/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteBranding = async ({ id }: DeleteBrandingParams): Promise<void> => {
  await axiosInstance.delete(`branding/${id}`);
};

export const searchBranding = async <T extends Scope>({
  term,
  scope,
}: SearchBrandingParams<T>): Promise<GetSearchBrandingResponse> => {
  const result: AxiosResponse<ResponseData<GetSearchBrandingResponse>> = await axiosInstance.get(
    'branding',
    {
      params: { term, scope },
    },
  );
  return result.data.data;
};

export const getBrandingForm = async ({
  id,
}: GetBrandingFormParams): Promise<GetBrandingFormResponse> => {
  const result: AxiosResponse<ResponseData<GetBrandingFormResponse>> = await axiosInstance.get(
    `branding/${id}/edit`,
  );
  return result.data.data;
};
