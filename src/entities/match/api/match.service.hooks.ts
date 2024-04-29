import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CALENDAR, GAME_DISCIPLINES, MANAGEMENT, MATCHES, TOURNAMENTS } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { PreDeletedTournament } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as matchesService from './match.service';

const calendarKeys = [CALENDAR.DAY, CALENDAR.WEEK, CALENDAR.MONTH, CALENDAR.QUARTER, CALENDAR.YEAR];
const tournamentKeys = [TOURNAMENTS.SCHEDULE, TOURNAMENTS.ITEMS_PRE_DELETED];
const gameDisciplineKeys = [GAME_DISCIPLINES.ITEMS_PRE_DELETED];
const matchKeys = [MATCHES.ITEMS_PRE_DELETED];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useCreateMatch = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: matchesService.createMatch,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Match created successfully.', { variant: 'success' });
    },
  });
};

export const useUpdateMatch = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: matchesService.updateMatch,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      tournamentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Match updated successfully.', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedMatchList = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: matchesService.restorePreDeletedMatchList,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      gameDisciplineKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      tournamentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      matchKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Matches restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteMatch = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: matchesService.preDeleteMatch,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      gameDisciplineKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      tournamentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      matchKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Match pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteMatchList = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: matchesService.deleteMatchList,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      gameDisciplineKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      tournamentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      matchKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Matches deleted successfully.', { variant: 'success' });
    },
  });
};

export const useGetMatchTypeOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [MATCHES.TYPE_OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await matchesService.getMatchTypes();
      return result?.map(({ name, value }) => ({
        label: name,
        value: String(value),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetPreDeletedMatchItems = () =>
  useQuery<PreDeletedTournament[]>(
    [MATCHES.ITEMS_PRE_DELETED],
    async (): Promise<PreDeletedTournament[]> => {
      const result = await matchesService.searchMatches<'only_deleted'>({ scope: 'only_deleted' });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetMatchForm = (id: string) =>
  useQuery(
    [MATCHES.FORM, id],
    async () => {
      const result = await matchesService.getMatchForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
