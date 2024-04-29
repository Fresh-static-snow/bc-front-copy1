import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CALENDAR, GAME_DISCIPLINES, MANAGEMENT, TOURNAMENTS } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { PreDeletedTournament } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as tournamentsService from './tournament.service';

const calendarKeys = [CALENDAR.DAY, CALENDAR.WEEK, CALENDAR.MONTH, CALENDAR.QUARTER, CALENDAR.YEAR];
const tournamentKeys = [TOURNAMENTS.MAIN, TOURNAMENTS.MEDIA, TOURNAMENTS.ITEMS_PRE_DELETED];
const gameDisciplineKeys = [GAME_DISCIPLINES.ITEMS_PRE_DELETED];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useCreateTournament = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: tournamentsService.createTournament,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Tournament created successfully', { variant: 'success' });
    },
  });
};

export const useGetTournament = (id: string) =>
  useQuery(
    [TOURNAMENTS.MAIN, id],
    async () => {
      const result = await tournamentsService.getTournament({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useUpdateTournament = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: tournamentsService.updateTournament,
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
      enqueueSnackbar('Tournament updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedTournament = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: tournamentsService.restorePreDeletedTournament,
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
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Tournament restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteTournament = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: tournamentsService.preDeleteTournament,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      gameDisciplineKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      tournamentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Tournament pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteTournament = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: tournamentsService.deleteTournament,
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
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Tournament deleted successfully.', { variant: 'success' });
    },
  });
};

export const useGetTournamentOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [TOURNAMENTS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await tournamentsService.searchTournaments({});
      return result?.map(({ id, title, discipline }) => ({
        label: title,
        value: String(id),
        additional: String(discipline?.id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetTournamentMedia = (id: string) =>
  useQuery(
    [TOURNAMENTS.MEDIA, id],
    async () => {
      const result = await tournamentsService.getTournamentMedias({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetTournamentSchedule = (id: string) =>
  useQuery(
    [TOURNAMENTS.SCHEDULE, id],
    async () => {
      const result = await tournamentsService.getTournamentSchedule({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetTournamentComments = (id: string) =>
  useQuery(
    [TOURNAMENTS.COMMENTS, id],
    async () => {
      const result = await tournamentsService.getTournamentComments({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetTournamentTypeOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [TOURNAMENTS.TYPE_OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await tournamentsService.searchTournamentTypes({});
      return result?.map(({ id, name }) => ({
        label: name,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetPreDeletedTournamentItems = () =>
  useQuery<PreDeletedTournament[]>(
    [TOURNAMENTS.ITEMS_PRE_DELETED],
    async (): Promise<PreDeletedTournament[]> => {
      const result = await tournamentsService.searchTournaments<'only_deleted'>({
        scope: 'only_deleted',
      });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetTournamentForm = (id: string) =>
  useQuery(
    [TOURNAMENTS.FORM, id],
    async () => {
      const result = await tournamentsService.getTournamentForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
