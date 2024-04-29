import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateUserParams,
  DeleteUserParams,
  GetAuthenticatedUserNotificationsCountResponse,
  GetAuthenticatedUserNotificationsParams,
  GetAuthenticatedUserNotificationsResponse,
  GetAuthenticatedUserResponse,
  GetUserParams,
  GetUserPermissionsResponse,
  GetUserResponse,
  GetUsersParams,
  GetUsersResponse,
  PreDeleteUserParams,
  PutUserResponse,
  RestorePreDeletedUserParams,
  Scope,
  UpdateUserParams,
  UpdateUserPasswordParams,
} from './users.service.types';

export const getUsers = async <T extends Scope>({
  scope,
  start_at,
  end_at,
  match_id,
}: GetUsersParams<T>): Promise<GetUsersResponse<T>> => {
  const result: AxiosResponse<ResponseData<GetUsersResponse<T>>> = await axiosInstance.get(
    'users',
    { params: { scope, start_at, end_at, match_id } },
  );
  return result.data.data;
};

export const getUser = async ({ id }: GetUserParams): Promise<GetUserResponse> => {
  const result: AxiosResponse<ResponseData<GetUserResponse>> = await axiosInstance.get(
    `users/${id}`,
  );
  return result.data.data;
};

export const createUser = async ({ formData }: CreateUserParams): Promise<void> => {
  await axiosInstance.post(`users`, formData);
};

export const updateUser = async ({ id, formData }: UpdateUserParams): Promise<PutUserResponse> => {
  const result: AxiosResponse<ResponseData<PutUserResponse>> = await axiosInstance.put(
    `users/${id}`,
    formData,
  );
  return result?.data?.data;
};

export const restorePreDeletedUser = async ({ id }: RestorePreDeletedUserParams): Promise<void> => {
  await axiosInstance.put(`users/${id}/restore`);
};

export const preDeleteUser = async ({ id, hide_history }: PreDeleteUserParams): Promise<void> => {
  await axiosInstance.delete(`users/${id}/soft_destroy`, {
    params: { hide_history },
  });
};

export const deleteUser = async ({ id }: DeleteUserParams): Promise<void> => {
  await axiosInstance.delete(`users/${id}`);
};

export const updateUserAvatar = async ({ id, formData }: UpdateUserParams): Promise<void> => {
  await axiosInstance.post(`users/${id}/update_avatar`, formData);
};

export const updateUserPassword = async ({ formData }: UpdateUserPasswordParams): Promise<void> => {
  await axiosInstance.put(`users/change_password`, formData);
};

export const getAuthenticatedUser = async (): Promise<GetAuthenticatedUserResponse> => {
  const result: AxiosResponse<ResponseData<GetAuthenticatedUserResponse>> = await axiosInstance.get(
    `users/authenticated`,
  );
  return result.data.data;
};

export const getUserPermissions = async (): Promise<GetUserPermissionsResponse> => {
  const result: AxiosResponse<ResponseData<GetUserPermissionsResponse>> = await axiosInstance.get(
    `users/permissions`,
  );
  return result.data.data;
};

export const getAuthenticatedUserNotifications = async ({
  page,
  start_id,
}: GetAuthenticatedUserNotificationsParams): Promise<GetAuthenticatedUserNotificationsResponse> => {
  const result: AxiosResponse<ResponseData<GetAuthenticatedUserNotificationsResponse>> =
    await axiosInstance.get(`users/authenticated/notifications`, {
      params: { page, start_id },
    });
  return result.data.data;
};

export const getAuthenticatedUserNotificationsCount =
  async (): Promise<GetAuthenticatedUserNotificationsCountResponse> => {
    const result: AxiosResponse<ResponseData<GetAuthenticatedUserNotificationsCountResponse>> =
      await axiosInstance.get(`users/authenticated/notifications/count`);
    return result.data.data;
  };
