import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateCastLanguageParams,
  DeleteCastLanguageParams,
  GetCastLanguageFormParams,
  GetCastLanguageFormResponse,
  GetCastLanguageParams,
  GetCastLanguageResponse,
  GetSearchCastLanguagesResponse,
  PreDeleteCastLanguageParams,
  RestorePreDeletedCastLanguageParams,
  Scope,
  SearchCastLanguagesParams,
  UpdateCastLanguageParams,
} from './castLanguage.service.types';

export const createCastLanguage = async ({ formData }: CreateCastLanguageParams): Promise<void> => {
  await axiosInstance.post(`casts/languages`, formData);
};

export const getCastLanguage = async ({
  id,
}: GetCastLanguageParams): Promise<GetCastLanguageResponse> => {
  const result: AxiosResponse<ResponseData<GetCastLanguageResponse>> = await axiosInstance.get(
    `casts/languages/${id}`,
  );
  return result.data.data;
};

export const updateCastLanguage = async ({
  id,
  formData,
}: UpdateCastLanguageParams): Promise<void> => {
  await axiosInstance.put(`casts/languages/${id}`, formData);
};

export const restorePreDeletedCastLanguage = async ({
  id,
}: RestorePreDeletedCastLanguageParams): Promise<void> => {
  await axiosInstance.put(`casts/languages/${id}/restore`);
};

export const preDeleteCastLanguage = async ({
  id,
  hide_history,
}: PreDeleteCastLanguageParams): Promise<void> => {
  await axiosInstance.delete(`casts/languages/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteCastLanguage = async ({ id }: DeleteCastLanguageParams): Promise<void> => {
  await axiosInstance.delete(`casts/languages/${id}`);
};

export const searchCastLanguages = async <T extends Scope, History extends boolean>({
  term,
  scope,
  with_history,
}: SearchCastLanguagesParams<T>): Promise<GetSearchCastLanguagesResponse<History>> => {
  const result: AxiosResponse<ResponseData<GetSearchCastLanguagesResponse<History>>> =
    await axiosInstance.get('casts/languages', {
      params: { term, scope, with_history },
    });
  return result.data.data;
};

export const getCastLanguageForm = async ({
  id,
}: GetCastLanguageFormParams): Promise<GetCastLanguageFormResponse> => {
  const result: AxiosResponse<ResponseData<GetCastLanguageFormResponse>> = await axiosInstance.get(
    `casts/languages/${id}/edit`,
  );
  return result.data.data;
};
