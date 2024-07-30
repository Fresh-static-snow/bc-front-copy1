import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CAST_STREAMS, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as castStreamsService from './castStream.service';

const castStreamsKeys = [
  CAST_STREAMS.OPTIONS,
  CAST_STREAMS.ITEMS_WITH_HISTORY,
  CAST_STREAMS.ITEMS_PRE_DELETED,
];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetCastStreamOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [CAST_STREAMS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await castStreamsService.searchCastStreams<null, false>({});
      return result?.map(({ id, name }) => ({
        label: name,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetCastStreamItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_STREAMS.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castStreamsService.searchCastStreams<null, true>({
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

export const useGetPreDeletedCastStreamItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_STREAMS.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castStreamsService.searchCastStreams<'only_deleted', true>({
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

export const useCreateCastStream = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStreamsService.createCastStream,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStreamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast stream created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateCastStream = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStreamsService.updateCastStream,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStreamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast stream updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedCastStream = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStreamsService.restorePreDeletedCastStream,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStreamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast stream restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteCastStream = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStreamsService.preDeleteCastStream,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStreamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast stream pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteCastStream = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStreamsService.deleteCastStream,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStreamsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast stream deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetCastStreamForm = (id: string) =>
  useQuery(
    [CAST_STREAMS.FORM, id],
    async () => {
      const result = await castStreamsService.getCastStreamForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
