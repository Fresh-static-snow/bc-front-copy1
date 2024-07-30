import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { ACCOUNT_SETTINGS } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { AxiosErrorContent } from '@/shared/types/services.types';

import * as accountSettingsService from './accountSettings.service';

export const useGetAccountSettings = () =>
  useQuery(
    [ACCOUNT_SETTINGS.MAIN_CONFIG],
    async () => {
      const result = await accountSettingsService.getAccountSettings();
      return result;
    },
    { cacheTime: Infinity, staleTime: Infinity },
  );

export const useUpdateAccountSettings = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: accountSettingsService.updateAccountSettings,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: (data) => {
      queryClient.setQueryData([ACCOUNT_SETTINGS.MAIN_CONFIG], data);
    },
  });
};
