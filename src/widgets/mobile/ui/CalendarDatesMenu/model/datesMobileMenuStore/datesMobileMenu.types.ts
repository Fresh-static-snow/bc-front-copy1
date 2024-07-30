import { PrimarySelectableValue } from '@/shared/types/values.types';

export type DatesMobileMenuStore = {
  creationRequestType: PrimarySelectableValue;
  editingRequestType: PrimarySelectableValue;

  setCreationRequestType: (type?: PrimarySelectableValue) => void;
  setEditingRequestType: (type?: PrimarySelectableValue) => void;
};
