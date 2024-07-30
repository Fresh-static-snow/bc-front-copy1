import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import * as tournamentsService from '@/entities/tournament/api/tournament.service';
import {
  CALENDAR,
  GAME_DISCIPLINES,
  MANAGEMENT,
  MATCHES,
  SEGMENTS,
  TOURNAMENTS,
} from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { PreDeletedTournament } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as segmentsService from './eventSegment.service';

const calendarKeys = [CALENDAR.DAY, CALENDAR.WEEK, CALENDAR.MONTH, CALENDAR.QUARTER, CALENDAR.YEAR];
const tournamentKeys = [TOURNAMENTS.SCHEDULE, TOURNAMENTS.ITEMS_PRE_DELETED];
const gameDisciplineKeys = [GAME_DISCIPLINES.ITEMS_PRE_DELETED];
const segmentKeys = [SEGMENTS.MAIN, SEGMENTS.MEDIA, SEGMENTS.ITEMS_PRE_DELETED];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useCreateSegment = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: segmentsService.createSegment,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Segment created successfully.', { variant: 'success' });
    },
  });
};

export const useGetSegment = (id: string) =>
  useQuery(
    [SEGMENTS.MAIN, id],
    async () => {
      const result = await segmentsService.getSegment({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useUpdateSegment = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: segmentsService.updateSegment,
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
      segmentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Segment updated successfully.', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedSegmentList = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: segmentsService.restorePreDeletedSegmentList,
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
      segmentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Segments restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteSegment = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: segmentsService.preDeleteSegment,
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
      segmentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Segment pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteSegmentList = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: segmentsService.deleteSegmentList,
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
      segmentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Segments deleted successfully.', { variant: 'success' });
    },
  });
};

export const useGetSegmentTypeOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [SEGMENTS.TYPE_OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await segmentsService.getSegmentTypes();
      return result?.map(({ name, value }) => ({
        label: name,
        value: String(value),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetPreDeletedSegmentItems = () =>
  useQuery<PreDeletedTournament[]>(
    [SEGMENTS.ITEMS_PRE_DELETED],
    async (): Promise<PreDeletedTournament[]> => {
      const result = await segmentsService.searchSegments<'only_deleted'>({
        scope: 'only_deleted',
      });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetSegmentForm = (id: string) =>
  useQuery(
    [SEGMENTS.FORM, id],
    async () => {
      const result = await segmentsService.getSegmentForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetSegmentMedia = (id: string) =>
  useQuery(
    [SEGMENTS.MEDIA, id],
    async () => {
      const result = await segmentsService.getSegmentMedias({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetSegmentComments = (id: string) =>
  useQuery(
    [SEGMENTS.COMMENTS, id],
    async () => {
      const result = await segmentsService.getSegmentComments({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
