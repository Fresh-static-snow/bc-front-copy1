import { PrimarySelectableValue } from '@/shared/types/values.types';

export type UpdateCorporateProps = {
  requestType: PrimarySelectableValue;
  setEntityModal: () => void;
};

export type LocationState = {
  prevPath?: string;
};
