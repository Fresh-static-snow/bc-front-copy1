import { PrimarySelectableValue } from '@/shared/types/values.types';

export type ManagementMenuStore = {
  creationRequestType: PrimarySelectableValue;
  editingRequestType: PrimarySelectableValue;

  setCreationRequestType: (type?: PrimarySelectableValue) => void;
  setEditingRequestType: (type?: PrimarySelectableValue) => void;
};
