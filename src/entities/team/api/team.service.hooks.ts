import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { MANAGEMENT, TEAMS } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as teamsService from './team.service';

const teamsKeys = [TEAMS.OPTIONS, TEAMS.ITEMS_WITH_HISTORY, TEAMS.ITEMS_PRE_DELETED];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetTeamOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [TEAMS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await teamsService.searchTeams<null, false>({});
      return result?.map(({ id, name }) => ({
        label: name,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetTeamItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [TEAMS.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await teamsService.searchTeams<null, true>({
        with_history: true,
      });
      return result?.map(({ id, name, events_count, related_events }) => ({
        id,
        name,
        events_count,
        related_events,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetPreDeletedTeamItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [TEAMS.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await teamsService.searchTeams<'only_deleted', true>({
        scope: 'only_deleted',
        with_history: true,
      });
      return result?.map(({ id, name, events_count, related_events }) => ({
        id,
        name,
        events_count,
        related_events,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useCreateTeam = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: teamsService.createTeam,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      teamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Team created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateTeam = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: teamsService.updateTeam,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      teamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Team updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedTeam = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: teamsService.restorePreDeletedTeam,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      teamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Team restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteTeam = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: teamsService.preDeleteTeam,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      teamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Team pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteTeam = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: teamsService.deleteTeam,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      teamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Team deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetTeamForm = (id: string) =>
  useQuery(
    [TEAMS.FORM, id],
    async () => {
      const result = await teamsService.getTeamForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
