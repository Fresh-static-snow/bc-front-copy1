import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { MANAGEMENT, ROLES } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as rolesService from './role.service';

const roleKeys = [ROLES.OPTIONS, ROLES.ITEMS_WITH_HISTORY];
const dashboardKeys = [
  MANAGEMENT.USERS,
  MANAGEMENT.COMPANIES,
  MANAGEMENT.COUNTS,
  MANAGEMENT.NOTIFICATIONS,
];

export const useGetRoleOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [ROLES.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await rolesService.searchRoles();
      return result?.map(({ id, title }) => ({
        label: title,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetRoleItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [ROLES.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await rolesService.searchRoles();
      return result?.map(({ id, title }) => ({
        id,
        name: title,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useCreateRole = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: rolesService.createRole,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      roleKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      dashboardKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Role created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateRole = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: rolesService.updateRole,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      roleKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      dashboardKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Role updated successfully', { variant: 'success' });
    },
  });
};

export const useDeleteRole = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: rolesService.deleteRole,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      roleKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      dashboardKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Role deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetRoleForm = (id: string) =>
  useQuery(
    [ROLES.FORM, id],
    async () => {
      const result = await rolesService.getRoleForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false, enabled: Boolean(id) },
  );

export const useGetRolePermissions = () =>
  useQuery(
    [ROLES.PERMISSIONS],
    async () => {
      const result = await rolesService.getRolePermissions();
      return result?.map(({ id, name, description }) => ({
        elemId: id,
        title: name,
        description,
      }));
    },
    { refetchOnWindowFocus: false },
  );
