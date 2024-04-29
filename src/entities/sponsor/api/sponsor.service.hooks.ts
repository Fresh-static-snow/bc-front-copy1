import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { MANAGEMENT, SPONSORS } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as sponsorsService from './sponsor.service';

const sponsorsKeys = [SPONSORS.OPTIONS, SPONSORS.ITEMS_WITH_HISTORY, SPONSORS.ITEMS_PRE_DELETED];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetSponsorOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [SPONSORS.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await sponsorsService.searchSponsors<null, false>({});
      return result?.map(({ id, name }) => ({
        label: name,
        value: String(id),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetSponsorItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [SPONSORS.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await sponsorsService.searchSponsors<null, true>({
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

export const useGetPreDeletedSponsorItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [SPONSORS.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await sponsorsService.searchSponsors<'only_deleted', true>({
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

export const useCreateSponsor = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: sponsorsService.createSponsor,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      sponsorsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Sponsor created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateSponsor = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: sponsorsService.updateSponsor,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      sponsorsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Sponsor updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedSponsor = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: sponsorsService.restorePreDeletedSponsor,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      sponsorsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Sponsor restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteSponsor = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: sponsorsService.preDeleteSponsor,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      sponsorsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Sponsor pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteSponsor = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: sponsorsService.deleteSponsor,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      sponsorsKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Sponsor deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetSponsorForm = (id: string) =>
  useQuery(
    [SPONSORS.FORM, id],
    async () => {
      const result = await sponsorsService.getSponsorForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
