import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CAST_CHANNELS, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as castChannelsService from './castChannel.service';

const castChannelsKeys = [
  CAST_CHANNELS.OPTIONS,
  CAST_CHANNELS.ITEMS_WITH_HISTORY,
  CAST_CHANNELS.ITEMS_PRE_DELETED,
];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetCastChannelOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [CAST_CHANNELS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await castChannelsService.searchCastChannels<null, false>({});
      return result?.map(({ id, name }) => ({
        label: name,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetCastChannelItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_CHANNELS.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castChannelsService.searchCastChannels<null, true>({
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

export const useGetPreDeletedCastChannelItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_CHANNELS.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castChannelsService.searchCastChannels<'only_deleted', true>({
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

export const useCreateCastChannel = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castChannelsService.createCastChannel,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castChannelsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast channel created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateCastChannel = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castChannelsService.updateCastChannel,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castChannelsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast channel updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedCastChannel = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castChannelsService.restorePreDeletedCastChannel,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castChannelsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast channel restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteCastChannel = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castChannelsService.preDeleteCastChannel,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castChannelsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast channel pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteCastChannel = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castChannelsService.deleteCastChannel,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castChannelsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast channel deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetCastChannelForm = (id: string) =>
  useQuery(
    [CAST_CHANNELS.FORM, id],
    async () => {
      const result = await castChannelsService.getCastChannelForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
