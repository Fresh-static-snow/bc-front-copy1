import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  ChangePasswordParams,
  EmailCheckingParams,
  GetAuthPermissionsResponse,
  InvitationParams,
  LoginParams,
  PostLoginResponse,
  PutChangePasswordResponse,
  PutInvitationResponse,
  ResentInvitationParams,
} from './auth.service.types';

export const login = async ({ formData }: LoginParams): Promise<PostLoginResponse> => {
  const result: AxiosResponse<ResponseData<PostLoginResponse>> = await axiosInstance.post(
    `login`,
    formData,
  );
  return result.data.data;
};

export const invitation = async ({
  formData,
}: InvitationParams): Promise<PutInvitationResponse> => {
  const result: AxiosResponse<ResponseData<PutInvitationResponse>> = await axiosInstance.put(
    `invitation`,
    formData,
  );
  return result.data.data;
};

export const resentInvitation = async ({ id }: ResentInvitationParams): Promise<void> => {
  await axiosInstance.get(`users/${id}/resent_invite`);
};

export const logout = async (): Promise<void> => {
  await axiosInstance.delete(`logout`);
};

export const resetPassword = async ({ formData }: EmailCheckingParams): Promise<void> => {
  await axiosInstance.post(`password`, formData);
};

export const changePassword = async ({
  formData,
}: ChangePasswordParams): Promise<PutChangePasswordResponse> => {
  const result: AxiosResponse<ResponseData<PutChangePasswordResponse>> = await axiosInstance.put(
    `password`,
    formData,
  );
  return result.data.data;
};

export const getAuthPermissions = async (): Promise<GetAuthPermissionsResponse> => {
  const result: AxiosResponse<ResponseData<GetAuthPermissionsResponse>> = await axiosInstance.get(
    `users/permissions`,
  );
  return result.data.data;
};
