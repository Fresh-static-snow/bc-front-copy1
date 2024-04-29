import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateUserDisciplineParams,
  DeleteUserDisciplineParams,
  GetSearchUserDisciplinesResponse,
  GetUserDisciplineFormParams,
  GetUserDisciplineFormResponse,
  GetUserDisciplineParams,
  GetUserDisciplineResponse,
  SearchUserDisciplinesParams,
  UpdateUserDisciplineParams,
} from './userDiscipline.service.types';

export const createUserDiscipline = async ({
  title,
}: CreateUserDisciplineParams): Promise<void> => {
  await axiosInstance.post(`user_disciplines`, { title });
};

export const getUserDiscipline = async ({
  id,
}: GetUserDisciplineParams): Promise<GetUserDisciplineResponse> => {
  const result: AxiosResponse<ResponseData<GetUserDisciplineResponse>> = await axiosInstance.get(
    `user_disciplines/${id}`,
  );
  return result.data.data;
};

export const updateUserDiscipline = async ({
  id,
  title,
}: UpdateUserDisciplineParams): Promise<void> => {
  await axiosInstance.put(`user_disciplines/${id}`, { title });
};

export const deleteUserDiscipline = async ({ id }: DeleteUserDisciplineParams): Promise<void> => {
  await axiosInstance.delete(`user_disciplines/${id}`);
};

export const searchUserDisciplines = async ({
  term,
}: SearchUserDisciplinesParams): Promise<GetSearchUserDisciplinesResponse> => {
  const result: AxiosResponse<ResponseData<GetSearchUserDisciplinesResponse>> =
    await axiosInstance.get('user_disciplines', {
      params: { term },
    });
  return result.data.data;
};

export const getUserDisciplineForm = async ({
  id,
}: GetUserDisciplineFormParams): Promise<GetUserDisciplineFormResponse> => {
  const result: AxiosResponse<ResponseData<GetUserDisciplineFormResponse>> =
    await axiosInstance.get(`user_disciplines/${id}/edit`);
  return result.data.data;
};
