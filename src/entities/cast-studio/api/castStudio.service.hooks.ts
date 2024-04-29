import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CAST_STUDIOS, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as castStudiosService from './castStudio.service';

const castStudiosKeys = [
  CAST_STUDIOS.OPTIONS,
  CAST_STUDIOS.ITEMS_WITH_HISTORY,
  CAST_STUDIOS.ITEMS_PRE_DELETED,
];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetCastStudioOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [CAST_STUDIOS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await castStudiosService.searchCastStudios<null, false>({});
      return result?.map(({ id, name, keyword }) => ({
        label: name,
        value: String(id),
        additional: keyword,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetCastStudioItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_STUDIOS.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castStudiosService.searchCastStudios<null, true>({
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

export const useGetPreDeletedCastStudioItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_STUDIOS.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castStudiosService.searchCastStudios<'only_deleted', true>({
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

export const useCreateCastStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStudiosService.createCastStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStudiosKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast studio created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateCastStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStudiosService.updateCastStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStudiosKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast studio updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedCastStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStudiosService.restorePreDeletedCastStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStudiosKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast studio restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteCastStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStudiosService.preDeleteCastStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStudiosKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast studio pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteCastStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castStudiosService.deleteCastStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castStudiosKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast studio deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetCastStudioForm = (id: string) =>
  useQuery(
    [CAST_STUDIOS.FORM, id],
    async () => {
      const result = await castStudiosService.getCastStudioForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
