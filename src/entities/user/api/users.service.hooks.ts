import {
  InfiniteData,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { COMPANIES, MANAGEMENT, USERS } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { useAuthStore } from '@/shared/model/auth/auth.store';
import { UserNotificationPage } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { CascaderPrimaryValue, PrimarySelectableValue } from '@/shared/types/values.types';

import * as usersService from './users.service';

const companyKeys = [COMPANIES.FORM];
const userKeys = [USERS.USER_DETAILED, USERS.USER_AUTHENTICATED];
const dashboardKeys = [
  MANAGEMENT.USERS,
  MANAGEMENT.COMPANIES,
  MANAGEMENT.COUNTS,
  MANAGEMENT.NOTIFICATIONS,
];
const usersKeys = [USERS.PRE_DELETED_USERS_OPTIONS];

export const useGetMainParticipantOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [USERS.MAIN_PARTICIPANT_OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await usersService.getUsers({ scope: 'main_participants' });
      return result?.map(({ id, display_name, avatar }) => ({
        label: display_name,
        value: String(id),
        additional: avatar?.url,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetMediaRepresentativeOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [USERS.MEDIA_REPRESENTATIVE_OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await usersService.getUsers({ scope: 'media_representatives' });
      return result?.map(({ id, display_name, avatar }) => ({
        label: display_name,
        value: String(id),
        additional: avatar?.url,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetAnalyticOptions = (
  start_at?: string,
  end_at?: string,
  match_id?: number | string,
) =>
  useQuery<PrimarySelectableValue[]>(
    [USERS.ANALYTIC_OPTIONS, start_at, end_at],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await usersService.getUsers({
        scope: 'analytics',
        start_at,
        end_at,
        match_id,
      });
      return result?.map(({ id, display_name, avatar, is_unavailable }) => ({
        label: display_name,
        value: String(id),
        additional: avatar?.url,
        status: is_unavailable,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetCommentatorsOptions = (
  start_at?: string,
  end_at?: string,
  match_id?: number | string,
) =>
  useQuery<PrimarySelectableValue[]>(
    [USERS.COMMENTATOR_OPTIONS, start_at, end_at],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await usersService.getUsers({
        scope: 'commentators',
        start_at,
        end_at,
        match_id,
      });
      return result?.map(({ id, display_name, avatar, is_unavailable }) => ({
        label: display_name,
        value: String(id),
        additional: avatar?.url,
        status: is_unavailable,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetStaffMemberOptions = (
  start_at?: string,
  end_at?: string,
  match_id?: number | string,
) =>
  useQuery<PrimarySelectableValue[]>(
    [USERS.STAFF_MEMBER_OPTIONS, start_at, end_at],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await usersService.getUsers({
        scope: 'staff_members',
        start_at,
        end_at,
        match_id,
      });
      return result?.map(({ id, display_name, avatar, is_unavailable }) => ({
        label: display_name,
        value: String(id),
        additional: avatar?.url,
        status: is_unavailable,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetManagerOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [USERS.MANAGER_OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await usersService.getUsers({ scope: 'managers' });
      return result?.map(({ id, display_name, avatar }) => ({
        label: display_name,
        value: String(id),
        additional: avatar?.url,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetParticipantCascadingOptions = () =>
  useQuery<CascaderPrimaryValue[]>(
    [USERS.PARTICIPANTS_CASCADING_OPTIONS],
    async (): Promise<CascaderPrimaryValue[]> => {
      const result = await usersService.getUsers({ scope: 'participants' });
      return result?.map(({ discipline, users }) => ({
        label: discipline,
        value: discipline,
        children: users?.map(({ id, display_name, avatar, user_disciplines }) => ({
          label: display_name,
          value: String(id),
          additional: avatar?.url,
          parents: user_disciplines?.map(({ title }) => title),
        })),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetPreDeletedUsers = () =>
  useQuery(
    [USERS.PRE_DELETED_USERS_OPTIONS],
    async () => {
      const result = await usersService.getUsers<'only_deleted'>({ scope: 'only_deleted' });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetUser = (id: number | string) =>
  useQuery(
    [USERS.USER_DETAILED, id],
    async () => {
      const result = await usersService.getUser({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: usersService.createUser,
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
      enqueueSnackbar('User created successfully.', { variant: 'success' });
    },
  });
};

export const useUpdateUser = (withoutSuccessMessage?: boolean) => {
  const authedUser = useAuthStore((state) => state.authedUser);
  const setAuthedUser = useAuthStore((state) => state.setAuthedUser);
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: usersService.updateUser,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: (data) => {
      if (data?.id === authedUser?.id) {
        setAuthedUser(data);
      }

      companyKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      userKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      dashboardKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });

      if (!withoutSuccessMessage) {
        enqueueSnackbar('User updated successfully.', { variant: 'success' });
      }
    },
  });
};

export const useRestorePreDeletedUser = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: usersService.restorePreDeletedUser,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      companyKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      userKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      dashboardKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      usersKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });

      enqueueSnackbar('User restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteUser = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: usersService.preDeleteUser,
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
      usersKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('User pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: usersService.deleteUser,
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
      usersKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('User deleted successfully.', { variant: 'success' });
    },
  });
};

export const useUpdateUserAvatar = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: usersService.updateUserAvatar,
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
      userKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Avatar updated successfully.', { variant: 'success' });
    },
  });
};

export const useUpdateUserPassword = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: usersService.updateUserPassword,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      enqueueSnackbar('Password updated successfully.', { variant: 'success' });
    },
  });
};

export const useGetAuthenticatedUser = () => {
  const authedUser = useAuthStore((state) => state.authedUser);
  const setAuthedUser = useAuthStore((state) => state.setAuthedUser);

  return useQuery(
    [USERS.USER_AUTHENTICATED],
    async () => {
      const result = await usersService.getAuthenticatedUser();

      if (result?.id === authedUser?.id) {
        setAuthedUser(result);
      }

      return result;
    },
    { refetchOnWindowFocus: false },
  );
};

export const useGetUserNotifications = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<InfiniteData<UserNotificationPage>>([
    USERS.USER_NOTIFICATIONS,
  ]);

  return useInfiniteQuery(
    [USERS.USER_NOTIFICATIONS],
    async ({ pageParam = 1 }) => {
      const result = await usersService.getAuthenticatedUserNotifications({
        page: pageParam as number,
        start_id: data?.pages?.[0]?.start_id ?? null,
      });
      return result;
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      getNextPageParam: (lastPage, pageParams) => {
        const nextPage =
          lastPage?.total_pages !== pageParams.length ? pageParams.length + 1 : undefined;
        return nextPage;
      },
    },
  );
};

export const useGetUserAccountNotifications = () => {
  const queryClient = useQueryClient();
  const data = queryClient.getQueryData<InfiniteData<UserNotificationPage>>([
    USERS.USER_ACCOUNT_NOTIFICATIONS,
  ]);

  return useInfiniteQuery(
    [USERS.USER_ACCOUNT_NOTIFICATIONS],
    async ({ pageParam = 1 }) => {
      const result = await usersService.getAuthenticatedUserNotifications({
        page: pageParam as number,
        start_id: data?.pages?.[0]?.start_id ?? null,
      });
      return result;
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      getNextPageParam: (lastPage, pageParams) => {
        const nextPage =
          lastPage?.total_pages !== pageParams.length ? pageParams.length + 1 : undefined;
        return nextPage;
      },
    },
  );
};

export const useGetUserNotificationsCount = () =>
  useQuery(
    [USERS.USER_NOTIFICATIONS_COUNT],
    async () => {
      const result = await usersService.getAuthenticatedUserNotificationsCount();
      return result.count;
    },
    { refetchOnWindowFocus: false },
  );
