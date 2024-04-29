import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { BRANDING, MANAGEMENT } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { ItemWithRelatedEvents } from '@/shared/types/entities.types';
import { AxiosErrorContent } from '@/shared/types/services.types';
import { PrimarySelectableValue } from '@/shared/types/values.types';

import * as brandingService from './branding.service';

const brandingKeys = [BRANDING.OPTIONS, BRANDING.ITEMS_PRE_DELETED, BRANDING.MAIN];
const managementKeys = [MANAGEMENT.ITEMS_COUNTS];

export const useGetBrandingOptions = () =>
  useQuery<PrimarySelectableValue[]>(
    [BRANDING.OPTIONS],
    async (): Promise<PrimarySelectableValue[]> => {
      const result = await brandingService.searchBranding({});
      return result?.map(({ id, name, visible }) => ({
        label: name,
        value: String(id),
        additional: String(visible),
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useGetBrandingMain = () =>
  useQuery(
    [BRANDING.MAIN],
    async () => {
      const result = await brandingService.getBrandingMain();
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetPreDeletedBrandingItems = () =>
  useQuery<ItemWithRelatedEvents[]>(
    [BRANDING.ITEMS_PRE_DELETED],
    async (): Promise<ItemWithRelatedEvents[]> => {
      const result = await brandingService.searchBranding<'only_deleted'>({
        scope: 'only_deleted',
      });
      return result?.map(({ id, name }) => ({
        id,
        name,
      }));
    },
    { refetchOnWindowFocus: false },
  );

export const useCreateBranding = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: brandingService.createBranding,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      brandingKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Branding created successfully', { variant: 'success' });
    },
  });
};

export const useUpdateBranding = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: brandingService.updateBranding,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      brandingKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Branding updated successfully', { variant: 'success' });
    },
  });
};

export const useChangeBrandingStatus = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: brandingService.changeBrandingStatus,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      brandingKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Active branding updated successfully', { variant: 'success' });
    },
  });
};

export const useRestorePreDeletedBranding = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: brandingService.restorePreDeletedBranding,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      brandingKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Branding restored successfully.', { variant: 'success' });
    },
  });
};

export const usePreDeleteBranding = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: brandingService.preDeleteBranding,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      brandingKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Branding pre deleted successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteBranding = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: brandingService.deleteBranding,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      brandingKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      managementKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Branding deleted successfully', { variant: 'success' });
    },
  });
};

export const useGetBrandingForm = (id: string) =>
  useQuery(
    [BRANDING.FORM, id],
    async () => {
      const result = await brandingService.getBrandingForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
