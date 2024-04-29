import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { sortingButtons } from '@/shared/const';
import { useSortUsers } from '@/shared/lib';

import { SortButton } from '..';

describe('ui/SortButton', () => {
  it('render SortButton', () => {
    const MockComponent = () => {
      const { sortingValue, onChangeSortingValue } = useSortUsers([]);

      return (
        <SortButton
          sortingButtons={sortingButtons}
          sortingValue={sortingValue}
          setSortingValue={onChangeSortingValue}
        />
      );
    };

    const { getByText } = render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    fireEvent.click(getByText('Sort by A to Z'));
    expect(getByText('Role')).toBeVisible();

    fireEvent.click(getByText('Role'));
  });
});
