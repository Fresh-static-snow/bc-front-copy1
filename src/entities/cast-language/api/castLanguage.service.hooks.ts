import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CAST_LANGUAGES, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as castLanguagesService from './castLanguage.service';

const castLanguagesKeys = [
  CAST_LANGUAGES.OPTIONS,
  CAST_LANGUAGES.ITEMS_WITH_HISTORY,
  CAST_LANGUAGES.ITEMS_PRE_DELETED,
];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetCastLanguageOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [CAST_LANGUAGES.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await castLanguagesService.searchCastLanguages<null, false>({});
      return result?.map(({ id, name, keyword }) => ({
        label: name,
        value: String(id),
        additional: keyword,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetCastLanguageItemsWithHistory = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_LANGUAGES.ITEMS_WITH_HISTORY],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castLanguagesService.searchCastLanguages<null, true>({
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

export const useGetPreDeletedCastLanguageItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [CAST_LANGUAGES.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await castLanguagesService.searchCastLanguages<'only_deleted', true>({
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

export const useCreateCastLanguage = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castLanguagesService.createCastLanguage,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castLanguagesKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast language created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateCastLanguage = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castLanguagesService.updateCastLanguage,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castLanguagesKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast language updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedCastLanguage = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castLanguagesService.restorePreDeletedCastLanguage,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castLanguagesKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast language restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteCastLanguage = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castLanguagesService.preDeleteCastLanguage,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castLanguagesKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast language pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteCastLanguage = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: castLanguagesService.deleteCastLanguage,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      castLanguagesKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Cast language deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetCastLanguageForm = (id: string) =>
  useQuery(
    [CAST_LANGUAGES.FORM, id],
    async () => {
      const result = await castLanguagesService.getCastLanguageForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
