import { PrimarySelectableValue } from '@/shared/types/values.types';

export type TournamentMobileMenuStore = {
  editingRequestType: PrimarySelectableValue;
  setEditingRequestType: (type?: PrimarySelectableValue) => void;
};
