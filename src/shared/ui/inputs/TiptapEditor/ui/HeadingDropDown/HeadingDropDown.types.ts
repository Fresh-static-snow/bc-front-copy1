import { SelectableValue } from '@/shared/types/values.types';

export type HeadingDropDownProps = {
  value: SelectableValue;
  setValue: (value: SelectableValue) => void;
  buttons: SelectableValue[];
};
