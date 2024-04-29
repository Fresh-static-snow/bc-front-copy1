import { SelectableValue } from '@/shared/types/values.types';

export type RequestTypeDropDownProps = {
  requestButtons: SelectableValue[];
  requestType: SelectableValue;
  setRequestType: (type: SelectableValue) => void;
};
