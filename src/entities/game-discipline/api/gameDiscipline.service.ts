import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateGameDisciplineParams,
  DeleteGameDisciplineParams,
  GetGameDisciplineFormParams,
  GetGameDisciplineFormResponse,
  GetGameDisciplineParams,
  GetGameDisciplineResponse,
  GetSearchGameDisciplinesResponse,
  PreDeleteDisciplineParams,
  RestorePreDeletedDisciplineParams,
  Scope,
  SearchGameDisciplinesParams,
  UpdateGameDisciplineParams,
} from './gameDisciplines.service.types';

export const createGameDiscipline = async ({
  formData,
}: CreateGameDisciplineParams): Promise<void> => {
  await axiosInstance.post(`game_disciplines`, formData);
};

export const getGameDiscipline = async ({
  id,
}: GetGameDisciplineParams): Promise<GetGameDisciplineResponse> => {
  const result: AxiosResponse<ResponseData<GetGameDisciplineResponse>> = await axiosInstance.get(
    `game_disciplines/${id}`,
  );
  return result.data.data;
};

export const updateGameDiscipline = async ({
  id,
  formData,
}: UpdateGameDisciplineParams): Promise<void> => {
  await axiosInstance.put(`game_disciplines/${id}`, formData);
};

export const restorePreDeletedDiscipline = async ({
  id,
}: RestorePreDeletedDisciplineParams): Promise<void> => {
  await axiosInstance.put(`game_disciplines/${id}/restore`);
};

export const preDeleteDiscipline = async ({ id }: PreDeleteDisciplineParams): Promise<void> => {
  await axiosInstance.delete(`game_disciplines/${id}/soft_destroy`);
};

export const deleteGameDiscipline = async ({ id }: DeleteGameDisciplineParams): Promise<void> => {
  await axiosInstance.delete(`game_disciplines/${id}`);
};

export const searchGameDisciplines = async <T extends Scope>({
  term,
  scope,
}: SearchGameDisciplinesParams<T>): Promise<GetSearchGameDisciplinesResponse<T>> => {
  const result: AxiosResponse<ResponseData<GetSearchGameDisciplinesResponse<T>>> =
    await axiosInstance.get('game_disciplines', {
      params: { term, scope },
    });
  return result.data.data;
};

export const getGameDisciplineForm = async ({
  id,
}: GetGameDisciplineFormParams): Promise<GetGameDisciplineFormResponse> => {
  const result: AxiosResponse<ResponseData<GetGameDisciplineFormResponse>> =
    await axiosInstance.get(`game_disciplines/${id}/edit`);
  return result.data.data;
};
