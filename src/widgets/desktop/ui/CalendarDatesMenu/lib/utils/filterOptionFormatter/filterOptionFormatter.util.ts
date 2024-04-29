import { SelectableValueWithChildren } from '@/shared/types/values.types';

import { ItemWithId } from './filterOptionFormatter.types';

export const filterOptionFormatter = <T extends ItemWithId>(
  label: string,
  value: string,
  children: T[],
  childrenNameField: keyof T,
): SelectableValueWithChildren => ({
  label,
  value,
  children: children?.map((item) => ({
    label: String(item?.[childrenNameField]),
    value: String(item.id),
    parent: value,
  })),
});
