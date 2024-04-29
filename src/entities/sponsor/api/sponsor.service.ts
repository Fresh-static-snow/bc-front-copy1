import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateSponsorParams,
  DeleteSponsorParams,
  GetSearchSponsorsResponse,
  GetSponsorFormParams,
  GetSponsorFormResponse,
  GetSponsorParams,
  GetSponsorResponse,
  PreDeleteSponsorParams,
  RestorePreDeletedSponsorParams,
  Scope,
  SearchSponsorsParams,
  UpdateSponsorParams,
} from './sponsor.service.types';

export const createSponsor = async ({ formData }: CreateSponsorParams): Promise<void> => {
  await axiosInstance.post(`sponsors`, formData);
};

export const getSponsor = async ({ id }: GetSponsorParams): Promise<GetSponsorResponse> => {
  const result: AxiosResponse<ResponseData<GetSponsorResponse>> = await axiosInstance.get(
    `sponsors/${id}`,
  );
  return result.data.data;
};

export const updateSponsor = async ({ id, formData }: UpdateSponsorParams): Promise<void> => {
  await axiosInstance.put(`sponsors/${id}`, formData);
};

export const restorePreDeletedSponsor = async ({
  id,
}: RestorePreDeletedSponsorParams): Promise<void> => {
  await axiosInstance.put(`sponsors/${id}/restore`);
};

export const preDeleteSponsor = async ({
  id,
  hide_history,
}: PreDeleteSponsorParams): Promise<void> => {
  await axiosInstance.delete(`sponsors/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteSponsor = async ({ id }: DeleteSponsorParams): Promise<void> => {
  await axiosInstance.delete(`sponsors/${id}`);
};

export const searchSponsors = async <T extends Scope, History extends boolean>({
  term,
  scope,
  with_history,
}: SearchSponsorsParams<T>): Promise<GetSearchSponsorsResponse<History>> => {
  const result: AxiosResponse<ResponseData<GetSearchSponsorsResponse<History>>> =
    await axiosInstance.get('sponsors', {
      params: { term, scope, with_history },
    });
  return result.data.data;
};

export const getSponsorForm = async ({
  id,
}: GetSponsorFormParams): Promise<GetSponsorFormResponse> => {
  const result: AxiosResponse<ResponseData<GetSponsorFormResponse>> = await axiosInstance.get(
    `sponsors/${id}/edit`,
  );
  return result.data.data;
};
