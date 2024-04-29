import { SelectableValue } from '@/shared/types/values.types';

export type SortButtonProps = {
  sortingValue: SelectableValue;
  setSortingValue: (value: SelectableValue) => void;
  sortingButtons: SelectableValue[];
};
