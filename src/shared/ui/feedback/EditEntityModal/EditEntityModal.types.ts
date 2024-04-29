import { FormTemplates, PrimarySelectableValue } from '@/shared/types/values.types';

export type EditEntityModalProps = {
  isMobile?: boolean;
  formTemplates: FormTemplates;
  requestType: PrimarySelectableValue;
  setRequestType: (type?: PrimarySelectableValue) => void;
};
