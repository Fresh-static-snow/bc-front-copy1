import { PrimarySelectableValue } from '@/shared/types/values.types';

export type UpdateMatchProps = {
  isMobile?: boolean;
  requestType: PrimarySelectableValue;
  setEntityModal: () => void;
};
