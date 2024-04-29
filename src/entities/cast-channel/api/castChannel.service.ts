import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateCastChannelParams,
  DeleteCastChannelParams,
  GetCastChannelFormParams,
  GetCastChannelFormResponse,
  GetCastChannelParams,
  GetCastChannelResponse,
  GetSearchCastChannelsResponse,
  PreDeleteCastChannelParams,
  RestorePreDeletedCastChannelParams,
  Scope,
  SearchCastChannelsParams,
  UpdateCastChannelParams,
} from './castChannel.service.types';

export const createCastChannel = async ({ formData }: CreateCastChannelParams): Promise<void> => {
  await axiosInstance.post(`casts/channels`, formData);
};

export const getCastChannel = async ({
  id,
}: GetCastChannelParams): Promise<GetCastChannelResponse> => {
  const result: AxiosResponse<ResponseData<GetCastChannelResponse>> = await axiosInstance.get(
    `casts/channels/${id}`,
  );
  return result.data.data;
};

export const updateCastChannel = async ({
  id,
  formData,
}: UpdateCastChannelParams): Promise<void> => {
  await axiosInstance.put(`casts/channels/${id}`, formData);
};

export const restorePreDeletedCastChannel = async ({
  id,
}: RestorePreDeletedCastChannelParams): Promise<void> => {
  await axiosInstance.put(`casts/channels/${id}/restore`);
};

export const preDeleteCastChannel = async ({
  id,
  hide_history,
}: PreDeleteCastChannelParams): Promise<void> => {
  await axiosInstance.delete(`casts/channels/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteCastChannel = async ({ id }: DeleteCastChannelParams): Promise<void> => {
  await axiosInstance.delete(`casts/channels/${id}`);
};

export const searchCastChannels = async <T extends Scope, History extends boolean>({
  term,
  scope,
  with_history,
}: SearchCastChannelsParams<T>): Promise<GetSearchCastChannelsResponse<History>> => {
  const result: AxiosResponse<ResponseData<GetSearchCastChannelsResponse<History>>> =
    await axiosInstance.get('casts/channels', {
      params: { term, scope, with_history },
    });
  return result.data.data;
};

export const getCastChannelForm = async ({
  id,
}: GetCastChannelFormParams): Promise<GetCastChannelFormResponse> => {
  const result: AxiosResponse<ResponseData<GetCastChannelFormResponse>> = await axiosInstance.get(
    `casts/channels/${id}/edit`,
  );
  return result.data.data;
};
