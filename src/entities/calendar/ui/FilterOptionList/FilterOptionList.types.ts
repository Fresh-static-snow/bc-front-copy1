import { SelectableValueWithChildren } from '@/shared/types/values.types';

export type FilterOptionListProps = {
  item: SelectableValueWithChildren;
  params: Record<string, string[]>;
  onClickFilterOption: (param: string, value: string) => void;
};
