import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { COMPANIES, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as userCompaniesService from './userCompany.service';

const companyKeys = [COMPANIES.FORM];
const dashboardKeys = [
  MANAGEMENT.USERS,
  MANAGEMENT.COMPANIES,
  MANAGEMENT.COUNTS,
  MANAGEMENT.NOTIFICATIONS,
];

export const useGetUserCompanyOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [COMPANIES.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await userCompaniesService.searchUserCompanies({});
      return result?.map(({ id, title }) => ({
        label: title,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetUserCompanyForm = (id: number | string) =>
  useQuery(
    [COMPANIES.FORM, id],
    async () => {
      const result = await userCompaniesService.getUserCompanyForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useCreateUserCompany = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: userCompaniesService.createUserCompany,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      dashboardKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('User company created successfully.', { variant: 'success' });
    },
  });
};

export const useUpdateUserCompany = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: userCompaniesService.updateUserCompany,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      companyKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      dashboardKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('User company updated successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteUserCompany = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: userCompaniesService.deleteUserCompany,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      dashboardKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('User company deleted successfully.', { variant: 'success' });
    },
  });
};
