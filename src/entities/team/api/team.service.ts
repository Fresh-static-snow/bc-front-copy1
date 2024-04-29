import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateTeamParams,
  DeleteTeamParams,
  GetSearchTeamsResponse,
  GetTeamFormParams,
  GetTeamFormResponse,
  GetTeamParams,
  GetTeamResponse,
  PreDeleteTeamParams,
  RestorePreDeletedTeamParams,
  Scope,
  SearchTeamsParams,
  UpdateTeamParams,
} from './team.service.types';

export const createTeam = async ({ formData }: CreateTeamParams): Promise<void> => {
  await axiosInstance.post(`teams`, formData);
};

export const getTeam = async ({ id }: GetTeamParams): Promise<GetTeamResponse> => {
  const result: AxiosResponse<ResponseData<GetTeamResponse>> = await axiosInstance.get(
    `teams/${id}`,
  );
  return result.data.data;
};

export const updateTeam = async ({ id, formData }: UpdateTeamParams): Promise<void> => {
  await axiosInstance.put(`teams/${id}`, formData);
};

export const restorePreDeletedTeam = async ({ id }: RestorePreDeletedTeamParams): Promise<void> => {
  await axiosInstance.put(`teams/${id}/restore`);
};

export const preDeleteTeam = async ({ id, hide_history }: PreDeleteTeamParams): Promise<void> => {
  await axiosInstance.delete(`teams/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteTeam = async ({ id }: DeleteTeamParams): Promise<void> => {
  await axiosInstance.delete(`teams/${id}`);
};

export const searchTeams = async <T extends Scope, History extends boolean>({
  term,
  scope,
  with_history,
}: SearchTeamsParams<T>): Promise<GetSearchTeamsResponse<History>> => {
  const result: AxiosResponse<ResponseData<GetSearchTeamsResponse<History>>> =
    await axiosInstance.get('teams', {
      params: { term, scope, with_history },
    });
  return result.data.data;
};

export const getTeamForm = async ({ id }: GetTeamFormParams): Promise<GetTeamFormResponse> => {
  const result: AxiosResponse<ResponseData<GetTeamFormResponse>> = await axiosInstance.get(
    `teams/${id}/edit`,
  );
  return result.data.data;
};
