import { SelectableValue } from '@/shared/types/values.types';

export type CreateEntityModalHeaderProps = {
  requestButtons: SelectableValue[];
  requestType: SelectableValue;
  setRequestType: (type: SelectableValue) => void;
};
