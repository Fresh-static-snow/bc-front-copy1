import { PrimarySelectableValue } from '@/shared/types/values.types';

export type TournamentMenuStore = {
  editingRequestType: PrimarySelectableValue;
  setEditingRequestType: (type?: PrimarySelectableValue) => void;
};
