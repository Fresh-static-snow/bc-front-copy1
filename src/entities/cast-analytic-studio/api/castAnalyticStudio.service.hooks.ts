import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CAST_ANALYTIC_STUDIOS, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as castAnalyticStudioService from './castAnalyticStudio.service';

const castAnalyticStudioKeys = [
  CAST_ANALYTIC_STUDIOS.OPTIONS,
  CAST_ANALYTIC_STUDIOS.ITEMS_WITH_HISTORY,
  CAST_ANALYTIC_STUDIOS.ITEMS_PRE_DELETED,
];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetCastAnalyticStudioOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [CAST_ANALYTIC_STUDIOS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await castAnalyticStudioService.searchCastAnalyticStudios<null, false>({});
      return result?.map(({ id, name, keyword }) => ({
        label: name,
        value: String(id),
        additional: keyword,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetCastAnalyticStudioItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_ANALYTIC_STUDIOS.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castAnalyticStudioService.searchCastAnalyticStudios<null, true>({
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

export const useGetPreDeletedCastAnalyticStudioItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_ANALYTIC_STUDIOS.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castAnalyticStudioService.searchCastAnalyticStudios<
        'only_deleted',
        true
      >({
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

export const useCreateCastAnalyticStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castAnalyticStudioService.createCastAnalyticStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castAnalyticStudioKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Analytic studio created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateCastAnalyticStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castAnalyticStudioService.updateCastAnalyticStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castAnalyticStudioKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Analytic studio updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedCastAnalyticStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castAnalyticStudioService.restorePreDeletedCastAnalyticStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castAnalyticStudioKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Analytic studio restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteCastAnalyticStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castAnalyticStudioService.preDeleteCastAnalyticStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castAnalyticStudioKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Analytic studio pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteCastAnalyticStudio = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castAnalyticStudioService.deleteCastAnalyticStudio,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castAnalyticStudioKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Analytic studio deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetCastAnalyticStudioForm = (id: string) =>
  useQuery(
    [CAST_ANALYTIC_STUDIOS.FORM, id],
    async () => {
      const result = await castAnalyticStudioService.getCastAnalyticStudioForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
