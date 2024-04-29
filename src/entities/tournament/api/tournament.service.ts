import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateTournamentParams,
  DeleteTournamentParams,
  GetSearchTournamentResponse,
  GetSearchTournamentTypesResponse,
  GetTournamentCommentsParams,
  GetTournamentCommentsResponse,
  GetTournamentFormParams,
  GetTournamentFormResponse,
  GetTournamentMediaParams,
  GetTournamentMediasResponse,
  GetTournamentParams,
  GetTournamentResponse,
  GetTournamentScheduleParams,
  GetTournamentScheduleResponse,
  PreDeleteTournamentParams,
  RestorePreDeletedTournamentParams,
  Scope,
  SearchTournamentsParams,
  SearchTournamentTypesParams,
  UpdateTournamentParams,
} from './tournament.service.types';

export const createTournament = async ({ formData }: CreateTournamentParams): Promise<void> => {
  await axiosInstance.post(`tournaments`, formData);
};

export const getTournament = async ({
  id,
}: GetTournamentParams): Promise<GetTournamentResponse> => {
  const result: AxiosResponse<ResponseData<GetTournamentResponse>> = await axiosInstance.get(
    `tournaments/${id}`,
  );
  return result.data.data;
};

export const updateTournament = async ({ id, formData }: UpdateTournamentParams): Promise<void> => {
  await axiosInstance.put(`tournaments/${id}`, formData);
};

export const restorePreDeletedTournament = async ({
  id,
}: RestorePreDeletedTournamentParams): Promise<void> => {
  await axiosInstance.put(`tournaments/${id}/restore`);
};

export const preDeleteTournament = async ({ id }: PreDeleteTournamentParams): Promise<void> => {
  await axiosInstance.delete(`tournaments/${id}/soft_destroy`);
};

export const deleteTournament = async ({ id }: DeleteTournamentParams): Promise<void> => {
  await axiosInstance.delete(`tournaments/${id}`);
};

export const searchTournaments = async <T extends Scope>({
  term,
  scope,
}: SearchTournamentsParams<T>): Promise<GetSearchTournamentResponse<T>> => {
  const result: AxiosResponse<ResponseData<GetSearchTournamentResponse<T>>> =
    await axiosInstance.get('tournaments', {
      params: { term, scope },
    });
  return result.data.data;
};

export const getTournamentMedias = async ({
  id,
}: GetTournamentMediaParams): Promise<GetTournamentMediasResponse> => {
  const result: AxiosResponse<ResponseData<GetTournamentMediasResponse>> = await axiosInstance.get(
    `tournaments/${id}/media`,
  );
  return result.data.data;
};

export const getTournamentSchedule = async ({
  id,
}: GetTournamentScheduleParams): Promise<GetTournamentScheduleResponse> => {
  const result: AxiosResponse<ResponseData<GetTournamentScheduleResponse>> =
    await axiosInstance.get(`tournaments/${id}/schedule`);
  return result.data.data;
};

export const getTournamentComments = async ({
  id,
}: GetTournamentCommentsParams): Promise<GetTournamentCommentsResponse> => {
  const result: AxiosResponse<ResponseData<GetTournamentCommentsResponse>> =
    await axiosInstance.get(`tournaments/${id}/comments`);
  return result.data.data;
};

export const searchTournamentTypes = async ({
  term,
}: SearchTournamentTypesParams): Promise<GetSearchTournamentTypesResponse> => {
  const result: AxiosResponse<ResponseData<GetSearchTournamentTypesResponse>> =
    await axiosInstance.get('tournaments/types', {
      params: { term },
    });
  return result.data.data;
};

export const getTournamentForm = async ({
  id,
}: GetTournamentFormParams): Promise<GetTournamentFormResponse> => {
  const result: AxiosResponse<ResponseData<GetTournamentFormResponse>> = await axiosInstance.get(
    `tournaments/${id}/edit`,
  );
  return result.data.data;
};
