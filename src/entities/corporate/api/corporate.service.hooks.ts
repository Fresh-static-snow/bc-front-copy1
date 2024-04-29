import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CALENDAR, CORPORATES } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { AxiosErrorContent } from '@/shared/types/services.types';

import * as corporatesService from './corporate.service';

const calendarKeys = [CALENDAR.DAY, CALENDAR.WEEK, CALENDAR.MONTH, CALENDAR.QUARTER, CALENDAR.YEAR];
const corporateKeys = [CORPORATES.MAIN];

export const useCreateCorporate = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: corporatesService.createCorporate,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Corporate event created successfully.', { variant: 'success' });
    },
  });
};

export const useGetCorporate = (id: string) =>
  useQuery(
    [CORPORATES.MAIN, id],
    async () => {
      const result = await corporatesService.getCorporate({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useUpdateCorporate = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: corporatesService.updateCorporate,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      corporateKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Corporate event updated successfully.', { variant: 'success' });
    },
  });
};

export const useDeleteCorporate = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: corporatesService.deleteCorporate,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      calendarKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      enqueueSnackbar('Corporate deleted successfully.', { variant: 'success' });
    },
  });
};

export const useGetCorporateComments = (id: string) =>
  useQuery(
    [CORPORATES.COMMENTS, id],
    async () => {
      const result = await corporatesService.getCorporateComments({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );

export const useGetCorporateForm = (id: string) =>
  useQuery(
    [CORPORATES.FORM, id],
    async () => {
      const result = await corporatesService.getCorporateForm({ id });
      return result;
    },
    { refetchOnWindowFocus: false },
  );
