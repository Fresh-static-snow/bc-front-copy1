import { useCallback, useState } from 'react';

import {
  UseConfirmationActionsProps,
  UseConfirmationActionsReturn,
} from './useConfirmationActions.types';

export const useConfirmationActions = <T>({
  onDeleteItem,
  onRestoreItem,
}: UseConfirmationActionsProps<T>): UseConfirmationActionsReturn<T> => {
  const [confirmDeleteData, setConfirmDeleteData] = useState<T>();
  const [confirmRestoreData, setConfirmRestoreData] = useState<T>();

  const onOpenDeleteModal = useCallback((data: T) => {
    setConfirmDeleteData(data);
  }, []);
  const onCloseDeleteModal = useCallback(() => {
    setConfirmDeleteData(undefined);
  }, []);

  const onOpenRestoreModal = useCallback((data: T) => {
    setConfirmRestoreData(data);
  }, []);
  const onCloseRestoreModal = useCallback(() => {
    setConfirmRestoreData(undefined);
  }, []);

  const onDelete = useCallback(() => {
    onDeleteItem?.(confirmDeleteData);
    setConfirmDeleteData(undefined);
  }, [confirmDeleteData, onDeleteItem]);
  const onRestore = useCallback(() => {
    onRestoreItem?.(confirmRestoreData);
    setConfirmRestoreData(undefined);
  }, [confirmRestoreData, onRestoreItem]);

  return {
    confirmDeleteData,
    confirmRestoreData,
    onOpenDeleteModal,
    onCloseDeleteModal,
    onOpenRestoreModal,
    onCloseRestoreModal,
    onDelete,
    onRestore,
  };
};
