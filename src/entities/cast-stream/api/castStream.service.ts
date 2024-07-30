import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateCastStreamParams,
  DeleteCastStreamParams,
  GetCastStreamFormParams,
  GetCastStreamFormResponse,
  GetCastStreamParams,
  GetCastStreamResponse,
  GetSearchCastStreamsResponse,
  PreDeleteCastStreamParams,
  RestorePreDeletedCastStreamParams,
  Scope,
  SearchCastStreamsParams,
  UpdateCastStreamParams,
} from './castStream.service.types';

export const createCastStream = async ({ formData }: CreateCastStreamParams): Promise<void> => {
  await axiosInstance.post(`casts/streams`, formData);
};

export const getCastStream = async ({
  id,
}: GetCastStreamParams): Promise<GetCastStreamResponse> => {
  const result: AxiosResponse<ResponseData<GetCastStreamResponse>> = await axiosInstance.get(
    `casts/streams/${id}`,
  );
  return result.data.data;
};

export const updateCastStream = async ({ id, formData }: UpdateCastStreamParams): Promise<void> => {
  await axiosInstance.put(`casts/streams/${id}`, formData);
};

export const restorePreDeletedCastStream = async ({
  id,
}: RestorePreDeletedCastStreamParams): Promise<void> => {
  await axiosInstance.put(`casts/streams/${id}/restore`);
};

export const preDeleteCastStream = async ({
  id,
  hide_history,
}: PreDeleteCastStreamParams): Promise<void> => {
  await axiosInstance.delete(`casts/streams/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteCastStream = async ({ id }: DeleteCastStreamParams): Promise<void> => {
  await axiosInstance.delete(`casts/streams/${id}`);
};

export const searchCastStreams = async <T extends Scope, History extends boolean>({
  term,
  scope,
  with_history,
}: SearchCastStreamsParams<T>): Promise<GetSearchCastStreamsResponse<History>> => {
  const result: AxiosResponse<ResponseData<GetSearchCastStreamsResponse<History>>> =
    await axiosInstance.get('casts/streams', {
      params: { term, scope, with_history },
    });
  return result.data.data;
};

export const getCastStreamForm = async ({
  id,
}: GetCastStreamFormParams): Promise<GetCastStreamFormResponse> => {
  const result: AxiosResponse<ResponseData<GetCastStreamFormResponse>> = await axiosInstance.get(
    `casts/streams/${id}/edit`,
  );
  return result.data.data;
};
