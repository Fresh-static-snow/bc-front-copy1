import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { formatArrayToMessages } from '@/shared/lib';
import { useAuthStore } from '@/shared/model/auth/auth.store';
import { AxiosErrorContent } from '@/shared/types/services.types';

import * as authService from './auth.service';

export const useLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  const setAuthedUser = useAuthStore((state) => state.setAuthedUser);
  const setAuthPermissions = useAuthStore((state) => state.setAuthPermissions);

  return useMutation({
    mutationFn: authService.login,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: async (data) => {
      setAuthedUser(data);

      try {
        const permissions = await authService.getAuthPermissions();
        setAuthPermissions(permissions);
      } catch (err) {
        const error = err as AxiosError<AxiosErrorContent>;
        enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
          variant: 'error',
        });
      }
    },
  });
};

export const useInvitation = () => {
  const { enqueueSnackbar } = useSnackbar();
  const setAuthedUser = useAuthStore((state) => state.setAuthedUser);
  const setAuthPermissions = useAuthStore((state) => state.setAuthPermissions);

  return useMutation({
    mutationFn: authService.invitation,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: async (data) => {
      setAuthedUser(data);

      try {
        const permissions = await authService.getAuthPermissions();
        setAuthPermissions(permissions);
      } catch (err) {
        const error = err as AxiosError<AxiosErrorContent>;
        enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
          variant: 'error',
        });
      }
    },
  });
};

export const useResentInvitation = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: authService.resentInvitation,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      enqueueSnackbar('Invitation has been sent', { variant: 'success' });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const setAuthedUser = useAuthStore((state) => state.setAuthedUser);
  const setAuthPermissions = useAuthStore((state) => state.setAuthPermissions);

  return useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      setAuthedUser(undefined);
      setAuthPermissions(undefined);
      queryClient.clear();
    },
  });
};

export const useEmailChecking = () => {
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: authService.resetPassword,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
  });
};

export const useChangePassword = () => {
  const { enqueueSnackbar } = useSnackbar();
  const setAuthedUser = useAuthStore((state) => state.setAuthedUser);
  const setAuthPermissions = useAuthStore((state) => state.setAuthPermissions);

  return useMutation({
    mutationFn: authService.changePassword,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: async (data) => {
      setAuthedUser(data);

      try {
        const permissions = await authService.getAuthPermissions();
        setAuthPermissions(permissions);
      } catch (err) {
        const error = err as AxiosError<AxiosErrorContent>;
        enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
          variant: 'error',
        });
      }
    },
  });
};
