import {
  FormTemplates,
  PrimarySelectableValue,
  SelectableValue,
} from '@/shared/types/values.types';

export type CreateEntityModalProps = {
  isMobile?: boolean;
  requestButtons: SelectableValue[];
  formTemplates: FormTemplates;
  requestType: PrimarySelectableValue;
  setRequestType: (type?: PrimarySelectableValue) => void;
};
