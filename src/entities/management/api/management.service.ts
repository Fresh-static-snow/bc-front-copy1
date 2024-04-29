import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  GetManagementCompaniesParams,
  GetManagementCompaniesResponse,
  GetManagementCountsResponse,
  GetManagementItemsResponse,
  GetManagementNotificationsParams,
  GetManagementNotificationsResponse,
  GetManagementUsersParams,
  GetManagementUsersResponse,
} from './management.service.types';

export const getDashboardUsers = async ({
  term,
}: GetManagementUsersParams): Promise<GetManagementUsersResponse> => {
  const result: AxiosResponse<ResponseData<GetManagementUsersResponse>> = await axiosInstance.get(
    'dashboard/users',
    {
      params: { term },
    },
  );
  return result.data.data;
};

export const getDashboardCompanies = async ({
  term,
}: GetManagementCompaniesParams): Promise<GetManagementCompaniesResponse> => {
  const result: AxiosResponse<ResponseData<GetManagementCompaniesResponse>> =
    await axiosInstance.get('dashboard/companies', {
      params: { term },
    });
  return result.data.data;
};

export const getDashboardNotifications = async ({
  page,
  start_id,
}: GetManagementNotificationsParams): Promise<GetManagementNotificationsResponse> => {
  const result: AxiosResponse<ResponseData<GetManagementNotificationsResponse>> =
    await axiosInstance.get('dashboard/notifications', {
      params: { page, start_id },
    });
  return result.data.data;
};

export const getDashboardCounts = async (): Promise<GetManagementCountsResponse> => {
  const result: AxiosResponse<ResponseData<GetManagementCountsResponse>> = await axiosInstance.get(
    'dashboard/counts',
  );
  return result.data.data;
};

export const getManagementItems = async (): Promise<GetManagementItemsResponse> => {
  const result: AxiosResponse<ResponseData<GetManagementItemsResponse>> = await axiosInstance.get(
    'items',
  );
  return result.data.data;
};
