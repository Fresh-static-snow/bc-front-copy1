import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CAST_SETUPS, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as castSetupsService from './castSetup.service';

const castSetupsKeys = [
  CAST_SETUPS.OPTIONS,
  CAST_SETUPS.ITEMS_WITH_HISTORY,
  CAST_SETUPS.ITEMS_PRE_DELETED,
];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetCastSetupOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [CAST_SETUPS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await castSetupsService.searchCastSetups<null, false>({});
      return result?.map(({ id, name }) => ({
        label: name,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetCastSetupItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_SETUPS.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castSetupsService.searchCastSetups<null, true>({
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

export const useGetPreDeletedCastSetupItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_SETUPS.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castSetupsService.searchCastSetups<'only_deleted', true>({
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

export const useCreateCastSetup = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castSetupsService.createCastSetup,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castSetupsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast setup created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateCastSetup = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castSetupsService.updateCastSetup,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castSetupsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast setup updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedCastSetup = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castSetupsService.restorePreDeletedCastSetup,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castSetupsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast setup restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteCastSetup = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castSetupsService.preDeleteCastSetup,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castSetupsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast setup pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteCastSetup = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castSetupsService.deleteCastSetup,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castSetupsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast setup deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetCastSetupForm = (id: string) =>
  useQuery(
    [CAST_SETUPS.FORM, id],
    async () => {
      const result = await castSetupsService.getCastSetupForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
