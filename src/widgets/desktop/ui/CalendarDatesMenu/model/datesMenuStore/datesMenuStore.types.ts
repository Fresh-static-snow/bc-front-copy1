import { PrimarySelectableValue } from '@/shared/types/values.types';

export type DatesMenuStore = {
  creationRequestType: PrimarySelectableValue;
  editingRequestType: PrimarySelectableValue;

  setCreationRequestType: (type?: PrimarySelectableValue) => void;
  setEditingRequestType: (type?: PrimarySelectableValue) => void;
};
