import { PrimarySelectableValue } from '@/shared/types/values.types';

export type SegmentMenuStore = {
  editingRequestType: PrimarySelectableValue;
  setEditingRequestType: (type?: PrimarySelectableValue) => void;
};
