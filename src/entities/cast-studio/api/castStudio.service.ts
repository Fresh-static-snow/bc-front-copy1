import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateCastStudioParams,
  DeleteCastStudioParams,
  GetCastStudioFormParams,
  GetCastStudioFormResponse,
  GetCastStudioParams,
  GetCastStudioResponse,
  GetSearchCastStudiosResponse,
  PreDeleteCastStudioParams,
  RestorePreDeletedCastStudioParams,
  Scope,
  SearchCastStudiosParams,
  UpdateCastStudioParams,
} from './castStudio.service.types';

export const createCastStudio = async ({ formData }: CreateCastStudioParams): Promise<void> => {
  await axiosInstance.post(`casts/studios`, formData);
};

export const getCastStudio = async ({
  id,
}: GetCastStudioParams): Promise<GetCastStudioResponse> => {
  const result: AxiosResponse<ResponseData<GetCastStudioResponse>> = await axiosInstance.get(
    `casts/studios/${id}`,
  );
  return result.data.data;
};

export const updateCastStudio = async ({ id, formData }: UpdateCastStudioParams): Promise<void> => {
  await axiosInstance.put(`casts/studios/${id}`, formData);
};

export const restorePreDeletedCastStudio = async ({
  id,
}: RestorePreDeletedCastStudioParams): Promise<void> => {
  await axiosInstance.put(`casts/studios/${id}/restore`);
};

export const preDeleteCastStudio = async ({
  id,
  hide_history,
}: PreDeleteCastStudioParams): Promise<void> => {
  await axiosInstance.delete(`casts/studios/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteCastStudio = async ({ id }: DeleteCastStudioParams): Promise<void> => {
  await axiosInstance.delete(`casts/studios/${id}`);
};

export const searchCastStudios = async <T extends Scope, History extends boolean>({
  term,
  scope,
  with_history,
}: SearchCastStudiosParams<T>): Promise<GetSearchCastStudiosResponse<History>> => {
  const result: AxiosResponse<ResponseData<GetSearchCastStudiosResponse<History>>> =
    await axiosInstance.get('casts/studios', {
      params: { term, scope, with_history },
    });
  return result.data.data;
};

export const getCastStudioForm = async ({
  id,
}: GetCastStudioFormParams): Promise<GetCastStudioFormResponse> => {
  const result: AxiosResponse<ResponseData<GetCastStudioFormResponse>> = await axiosInstance.get(
    `casts/studios/${id}/edit`,
  );
  return result.data.data;
};
