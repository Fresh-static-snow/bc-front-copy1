export type UseConfirmationActionsProps<T> = {
  onDeleteItem?: (data: T) => void;
  onRestoreItem?: (data: T) => void;
};

export type UseConfirmationActionsReturn<T> = {
  confirmDeleteData?: T;
  onOpenDeleteModal: (data: T) => void;
  onCloseDeleteModal: () => void;
  onDelete: () => void;
  confirmRestoreData?: T;
  onOpenRestoreModal: (data: T) => void;
  onCloseRestoreModal: () => void;
  onRestore: () => void;
};
