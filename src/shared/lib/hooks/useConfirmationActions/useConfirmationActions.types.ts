import { UseMutateAsyncFunction } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { AxiosErrorContent } from '@/shared/types/services.types';

export type UseConfirmationActionsProps<T> = {
  onDeleteItem?: UseMutateAsyncFunction<
    void,
    AxiosError<AxiosErrorContent>,
    {
      id: T;
    },
    unknown
  >;
  onRestoreItem?: UseMutateAsyncFunction<
    void,
    AxiosError<AxiosErrorContent>,
    {
      id: T;
    },
    unknown
  >;
};

export type UseConfirmationActionsReturn<T> = {
  confirmDeleteId?: T;
  onOpenDeleteModal: (id: T) => void;
  onCloseDeleteModal: () => void;
  onDelete: () => void;
  confirmRestoreId?: T;
  onOpenRestoreModal: (id: T) => void;
  onCloseRestoreModal: () => void;
  onRestore: () => void;
};
