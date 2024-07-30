import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useSnackbar } from 'notistack';

import { CORPORATES, SEGMENTS, TOURNAMENTS } from '@/shared/api';
import { formatArrayToMessages } from '@/shared/lib';
import { AxiosErrorContent } from '@/shared/types/services.types';

import * as commentsService from './comment.service';

const tournamentKeys = [TOURNAMENTS.MAIN, TOURNAMENTS.COMMENTS];
const corporateKeys = [CORPORATES.MAIN, CORPORATES.COMMENTS];
const segmentKeys = [SEGMENTS.MAIN, SEGMENTS.COMMENTS];

export const useCreateComment = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: commentsService.createComment,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      tournamentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      corporateKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      segmentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
    },
  });
};

export const useUpdateComment = () => {
  const queryClient = useQueryClient();
  const { enqueueSnackbar } = useSnackbar();

  return useMutation({
    mutationFn: commentsService.updateComment,
    onError: (error: AxiosError<AxiosErrorContent>) => {
      enqueueSnackbar(formatArrayToMessages(error?.response?.data?.errors, error?.message), {
        variant: 'error',
      });
    },
    onSuccess: () => {
      tournamentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      corporateKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
      segmentKeys.forEach((queryKey) => {
        queryClient.invalidateQueries([queryKey]);
      });
    },
  });
};
