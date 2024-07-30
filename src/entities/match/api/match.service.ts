import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateMatchParams,
  DeleteMatchListParams,
  DeleteMatchParams,
  GetMatchFormParams,
  GetMatchFormResponse,
  GetMatchParams,
  GetMatchResponse,
  GetMatchTypesResponse,
  GetSearchMatchesResponse,
  PreDeleteMatchListParams,
  PreDeleteMatchParams,
  RestorePreDeletedMatchListParams,
  RestorePreDeletedMatchParams,
  Scope,
  SearchMatchesParams,
  UpdateMatchParams,
} from './match.service.types';

export const createMatch = async ({ formData }: CreateMatchParams): Promise<void> => {
  await axiosInstance.post(`matches`, formData);
};

export const getMatch = async ({ id }: GetMatchParams): Promise<GetMatchResponse> => {
  const result: AxiosResponse<ResponseData<GetMatchResponse>> = await axiosInstance.get(
    `matches/${id}`,
  );
  return result.data.data;
};

export const updateMatch = async ({ id, formData }: UpdateMatchParams): Promise<void> => {
  await axiosInstance.put(`matches/${id}`, formData);
};

export const restorePreDeletedMatch = async ({
  id,
}: RestorePreDeletedMatchParams): Promise<void> => {
  await axiosInstance.put(`matches/${id}/restore`);
};

export const restorePreDeletedMatchList = async ({
  ids,
}: RestorePreDeletedMatchListParams): Promise<void> => {
  await axiosInstance.put(`matches/restore`, {}, { params: { ids } });
};

export const preDeleteMatch = async ({ id }: PreDeleteMatchParams): Promise<void> => {
  await axiosInstance.delete(`matches/${id}/soft_destroy`);
};

export const preDeleteMatchList = async ({ ids }: PreDeleteMatchListParams): Promise<void> => {
  await axiosInstance.delete(`matches/soft_destroy`, {
    params: { ids },
  });
};

export const deleteMatch = async ({ id }: DeleteMatchParams): Promise<void> => {
  await axiosInstance.delete(`matches/${id}`);
};

export const deleteMatchList = async ({ ids }: DeleteMatchListParams): Promise<void> => {
  await axiosInstance.delete(`matches/destroy`, {
    params: { ids },
  });
};

export const getMatchTypes = async (): Promise<GetMatchTypesResponse> => {
  const result: AxiosResponse<ResponseData<GetMatchTypesResponse>> = await axiosInstance.get(
    'matches/types',
  );
  return result.data.data;
};

export const searchMatches = async <T extends Scope>({
  scope,
}: SearchMatchesParams<T>): Promise<GetSearchMatchesResponse<T>> => {
  const result: AxiosResponse<ResponseData<GetSearchMatchesResponse<T>>> = await axiosInstance.get(
    'matches',
    { params: { scope } },
  );
  return result.data.data;
};

export const getMatchForm = async ({ id }: GetMatchFormParams): Promise<GetMatchFormResponse> => {
  const result: AxiosResponse<ResponseData<GetMatchFormResponse>> = await axiosInstance.get(
    `matches/${id}/edit`,
  );
  return result.data.data;
};
