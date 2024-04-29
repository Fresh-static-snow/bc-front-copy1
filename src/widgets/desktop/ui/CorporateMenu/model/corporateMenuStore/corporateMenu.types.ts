import { PrimarySelectableValue } from '@/shared/types/values.types';

export type CorporateMenuStore = {
  editingRequestType: PrimarySelectableValue;
  setEditingRequestType: (type?: PrimarySelectableValue) => void;
};
