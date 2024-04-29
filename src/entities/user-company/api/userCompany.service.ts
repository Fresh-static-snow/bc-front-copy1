import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CreateUserCompanyParams,
  DeleteUserCompanyParams,
  GetSearchUserCompaniesResponse,
  GetUserCompanyFormParams,
  GetUserCompanyFormResponse,
  GetUserCompanyParams,
  GetUserCompanyResponse,
  SearchUserCompaniesParams,
  UpdateUserCompanyParams,
} from './userCompany.service.types';

export const createUserCompany = async ({ formData }: CreateUserCompanyParams): Promise<void> => {
  await axiosInstance.post(`user_companies`, formData);
};

export const getUserCompany = async ({
  id,
}: GetUserCompanyParams): Promise<GetUserCompanyResponse> => {
  const result: AxiosResponse<ResponseData<GetUserCompanyResponse>> = await axiosInstance.get(
    `user_companies/${id}`,
  );
  return result.data.data;
};

export const updateUserCompany = async ({
  id,
  formData,
}: UpdateUserCompanyParams): Promise<void> => {
  await axiosInstance.put(`user_companies/${id}`, formData);
};

export const deleteUserCompany = async ({ id }: DeleteUserCompanyParams): Promise<void> => {
  await axiosInstance.delete(`user_companies/${id}`);
};

export const searchUserCompanies = async ({
  term,
}: SearchUserCompaniesParams): Promise<GetSearchUserCompaniesResponse> => {
  const result: AxiosResponse<ResponseData<GetSearchUserCompaniesResponse>> =
    await axiosInstance.get('user_companies', {
      params: { term },
    });
  return result.data.data;
};

export const getUserCompanyForm = async ({
  id,
}: GetUserCompanyFormParams): Promise<GetUserCompanyFormResponse> => {
  const result: AxiosResponse<ResponseData<GetUserCompanyFormResponse>> = await axiosInstance.get(
    `user_companies/${id}/edit`,
  );
  return result.data.data;
};
