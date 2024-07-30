import { PrimarySelectableValue } from '@/shared/types/values.types';

export type UpdateSegmentProps = {
  isMobile?: boolean;
  requestType: PrimarySelectableValue;
  setEntityModal: () => void;
};
