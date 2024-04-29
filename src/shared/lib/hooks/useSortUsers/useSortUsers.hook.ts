import { useMemo, useState } from 'react';

import { sortingButtons } from '@/shared/const';
import { SelectableValue } from '@/shared/types/values.types';

import { SortingUser } from './useSortUsers.types';

export const useSortUsers = <T extends SortingUser>(users: T[]) => {
  const [sortingValue, setSortingValue] = useState<SelectableValue>(sortingButtons[0]);

  const sortedUsers = useMemo(() => {
    if (!users) {
      return [];
    }

    switch (sortingValue.value) {
      case 'asc':
        return [...users].sort((a, b) => a.display_name.localeCompare(b.display_name));
      case 'desc':
        return [...users].sort((a, b) => b.display_name.localeCompare(a.display_name));
      case 'role-asc':
        return [...users].sort((a, b) => a.roles?.[0]?.title.localeCompare(b.roles?.[0]?.title));
      default:
        return users;
    }
  }, [sortingValue, users]);

  const onChangeSortingValue = (value: SelectableValue) => {
    setSortingValue(value);
  };

  return {
    sortedUsers,
    sortingValue,
    onChangeSortingValue,
  };
};
