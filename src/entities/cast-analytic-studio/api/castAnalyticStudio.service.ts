import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateCastAnalyticStudioParams,
  DeleteCastAnalyticStudioParams,
  GetCastAnalyticStudioFormParams,
  GetCastAnalyticStudioFormResponse,
  GetCastAnalyticStudioParams,
  GetCastAnalyticStudioResponse,
  GetSearchCastAnalyticStudiosResponse,
  PreDeleteCastAnalyticStudioParams,
  RestorePreDeletedCastAnalyticStudioParams,
  Scope,
  SearchCastAnalyticStudiosParams,
  UpdateCastAnalyticStudioParams,
} from './castAnalyticStudio.service.types';

export const createCastAnalyticStudio = async ({
  formData,
}: CreateCastAnalyticStudioParams): Promise<void> => {
  await axiosInstance.post(`casts/analytic_studios`, formData);
};

export const getCastAnalyticStudio = async ({
  id,
}: GetCastAnalyticStudioParams): Promise<GetCastAnalyticStudioResponse> => {
  const result: AxiosResponse<ResponseData<GetCastAnalyticStudioResponse>> =
    await axiosInstance.get(`casts/analytic_studios/${id}`);
  return result.data.data;
};

export const updateCastAnalyticStudio = async ({
  id,
  formData,
}: UpdateCastAnalyticStudioParams): Promise<void> => {
  await axiosInstance.put(`casts/analytic_studios/${id}`, formData);
};

export const restorePreDeletedCastAnalyticStudio = async ({
  id,
}: RestorePreDeletedCastAnalyticStudioParams): Promise<void> => {
  await axiosInstance.put(`casts/analytic_studios/${id}/restore`);
};

export const preDeleteCastAnalyticStudio = async ({
  id,
  hide_history,
}: PreDeleteCastAnalyticStudioParams): Promise<void> => {
  await axiosInstance.delete(`casts/analytic_studios/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteCastAnalyticStudio = async ({
  id,
}: DeleteCastAnalyticStudioParams): Promise<void> => {
  await axiosInstance.delete(`casts/analytic_studios/${id}`);
};

export const searchCastAnalyticStudios = async <T extends Scope, History extends boolean>({
  term,
  scope,
  with_history,
}: SearchCastAnalyticStudiosParams<T>): Promise<GetSearchCastAnalyticStudiosResponse<History>> => {
  const result: AxiosResponse<ResponseData<GetSearchCastAnalyticStudiosResponse<History>>> =
    await axiosInstance.get('casts/analytic_studios', {
      params: { term, scope, with_history },
    });
  return result.data.data;
};

export const getCastAnalyticStudioForm = async ({
  id,
}: GetCastAnalyticStudioFormParams): Promise<GetCastAnalyticStudioFormResponse> => {
  const result: AxiosResponse<ResponseData<GetCastAnalyticStudioFormResponse>> =
    await axiosInstance.get(`casts/analytic_studios/${id}/edit`);
  return result.data.data;
};
