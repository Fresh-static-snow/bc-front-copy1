import { useCallback, useState } from 'react';

import {
  UseConfirmationActionsProps,
  UseConfirmationActionsReturn,
} from './useConfirmationActions.types';

export const useConfirmationActions = <T>({
  onDeleteItem,
  onRestoreItem,
}: UseConfirmationActionsProps<T>): UseConfirmationActionsReturn<T> => {
  const [confirmDeleteId, setConfirmDeleteId] = useState<T>();
  const [confirmRestoreId, setConfirmRestoreId] = useState<T>();

  const onOpenDeleteModal = useCallback((id: T) => {
    setConfirmDeleteId(id);
  }, []);
  const onCloseDeleteModal = useCallback(() => {
    setConfirmDeleteId(undefined);
  }, []);

  const onOpenRestoreModal = useCallback((id: T) => {
    setConfirmRestoreId(id);
  }, []);
  const onCloseRestoreModal = useCallback(() => {
    setConfirmRestoreId(undefined);
  }, []);

  const onDelete = useCallback(() => {
    onDeleteItem?.({ id: confirmDeleteId });
    setConfirmDeleteId(undefined);
  }, [confirmDeleteId, onDeleteItem]);
  const onRestore = useCallback(() => {
    onRestoreItem?.({ id: confirmRestoreId });
    setConfirmRestoreId(undefined);
  }, [confirmRestoreId, onRestoreItem]);

  return {
    confirmDeleteId,
    confirmRestoreId,
    onOpenDeleteModal,
    onCloseDeleteModal,
    onOpenRestoreModal,
    onCloseRestoreModal,
    onDelete,
    onRestore,
  };
};
