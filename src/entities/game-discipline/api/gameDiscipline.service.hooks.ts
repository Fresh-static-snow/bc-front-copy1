import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CALENDAR, GAME_DISCIPLINES, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { PreDeletedDiscipline } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as gameDisciplinesService from './gameDiscipline.service';

const calendarKeys = [CALENDAR.DAY, CALENDAR.WEEK, CALENDAR.MONTH, CALENDAR.QUARTER, CALENDAR.YEAR];
const disciplineKeys = [GAME_DISCIPLINES.ITEMS_PRE_DELETED];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useCreateGameDiscipline = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: gameDisciplinesService.createGameDiscipline,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Game discipline created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateGameDiscipline = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: gameDisciplinesService.updateGameDiscipline,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Game discipline updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedDiscipline = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: gameDisciplinesService.restorePreDeletedDiscipline,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      disciplineKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Discipline restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteDiscipline = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: gameDisciplinesService.preDeleteDiscipline,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Discipline pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteGameDiscipline = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: gameDisciplinesService.deleteGameDiscipline,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      disciplineKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Game discipline deleted successfully.', { variant: 'success' });
    },
  });
};

export const useGetGameDisciplineOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [GAME_DISCIPLINES.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await gameDisciplinesService.searchGameDisciplines({});
      return result?.map(({ id, title }) => ({ label: title, value: String(id) }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetPreDeletedGameDisciplineItems = () =>
  useQuery<PreDeletedDiscipline[]>(
    [GAME_DISCIPLINES.ITEMS_PRE_DELETED],
    async (): Promise<PreDeletedDiscipline[]> => {
      const result = await gameDisciplinesService.searchGameDisciplines<'only_deleted'>({
        scope: 'only_deleted',
      });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetGameDisciplineForm = (id: string) =>
  useQuery(
    [GAME_DISCIPLINES.FORM, id],
    async () => {
      const result = await gameDisciplinesService.getGameDisciplineForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
