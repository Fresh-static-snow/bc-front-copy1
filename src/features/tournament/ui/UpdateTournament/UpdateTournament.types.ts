import { PrimarySelectableValue } from '@/shared/types/values.types';

export type UpdateTournamentProps = {
  requestType: PrimarySelectableValue;
  setEntityModal: () => void;
};

export type LocationState = {
  prevPath?: string;
};
