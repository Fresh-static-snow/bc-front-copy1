import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateRoleParams,
  DeleteRoleParams,
  GetRoleFormParams,
  GetRoleFormResponse,
  GetRoleParams,
  GetRolePermissionsResponse,
  GetRoleResponse,
  GetSearchRolesResponse,
  UpdateRoleParams,
} from './role.service.types';

export const createRole = async ({ formData }: CreateRoleParams): Promise<void> => {
  await axiosInstance.post(`roles`, formData);
};

export const getRole = async ({ id }: GetRoleParams): Promise<GetRoleResponse> => {
  const result: AxiosResponse<ResponseData<GetRoleResponse>> = await axiosInstance.get(
    `roles/${id}`,
  );
  return result.data.data;
};

export const updateRole = async ({ id, formData }: UpdateRoleParams): Promise<void> => {
  await axiosInstance.put(`roles/${id}`, formData);
};

export const deleteRole = async ({ id }: DeleteRoleParams): Promise<void> => {
  await axiosInstance.delete(`roles/${id}`);
};

export const searchRoles = async (): Promise<GetSearchRolesResponse> => {
  const result: AxiosResponse<ResponseData<GetSearchRolesResponse>> = await axiosInstance.get(
    'roles',
  );
  return result.data.data;
};

export const getRoleForm = async ({ id }: GetRoleFormParams): Promise<GetRoleFormResponse> => {
  const result: AxiosResponse<ResponseData<GetRoleFormResponse>> = await axiosInstance.get(
    `roles/${id}/edit`,
  );
  return result.data.data;
};

export const getRolePermissions = async (): Promise<GetRolePermissionsResponse> => {
  const result: AxiosResponse<ResponseData<GetRolePermissionsResponse>> = await axiosInstance.get(
    `roles/permissions`,
  );
  return result.data.data;
};
