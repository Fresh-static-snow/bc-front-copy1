import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateCastSetupParams,
  DeleteCastSetupParams,
  GetCastSetupFormParams,
  GetCastSetupFormResponse,
  GetCastSetupParams,
  GetCastSetupResponse,
  GetSearchCastSetupsResponse,
  PreDeleteCastSetupParams,
  RestorePreDeletedCastSetupParams,
  Scope,
  SearchCastSetupsParams,
  UpdateCastSetupParams,
} from './castSetup.service.types';

export const createCastSetup = async ({ formData }: CreateCastSetupParams): Promise<void> => {
  await axiosInstance.post(`casts/setups`, formData);
};

export const getCastSetup = async ({ id }: GetCastSetupParams): Promise<GetCastSetupResponse> => {
  const result: AxiosResponse<ResponseData<GetCastSetupResponse>> = await axiosInstance.get(
    `casts/setups/${id}`,
  );
  return result.data.data;
};

export const updateCastSetup = async ({ id, formData }: UpdateCastSetupParams): Promise<void> => {
  await axiosInstance.put(`casts/setups/${id}`, formData);
};

export const restorePreDeletedCastSetup = async ({
  id,
}: RestorePreDeletedCastSetupParams): Promise<void> => {
  await axiosInstance.put(`casts/setups/${id}/restore`);
};

export const preDeleteCastSetup = async ({
  id,
  hide_history,
}: PreDeleteCastSetupParams): Promise<void> => {
  await axiosInstance.delete(`casts/setups/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteCastSetup = async ({ id }: DeleteCastSetupParams): Promise<void> => {
  await axiosInstance.delete(`casts/setups/${id}`);
};

export const searchCastSetups = async <T extends Scope, History extends boolean>({
  term,
  scope,
  with_history,
}: SearchCastSetupsParams<T>): Promise<GetSearchCastSetupsResponse<History>> => {
  const result: AxiosResponse<ResponseData<GetSearchCastSetupsResponse<History>>> =
    await axiosInstance.get('casts/setups', {
      params: { term, scope, with_history },
    });
  return result.data.data;
};

export const getCastSetupForm = async ({
  id,
}: GetCastSetupFormParams): Promise<GetCastSetupFormResponse> => {
  const result: AxiosResponse<ResponseData<GetCastSetupFormResponse>> = await axiosInstance.get(
    `casts/setups/${id}/edit`,
  );
  return result.data.data;
};
