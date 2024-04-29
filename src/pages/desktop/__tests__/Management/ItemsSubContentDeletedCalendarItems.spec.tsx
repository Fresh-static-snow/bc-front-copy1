import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import ItemsSubContentDeletedCalendarItems from '../../ui/Management/ui/ItemsSubContentDeletedCalendarItems/ItemsSubContentDeletedCalendarItems';

describe('pages/desktop/Management/ItemsSubContentDeletedCalendarItems', () => {
  test('render ItemsSubContentDeletedCalendarItems with basic route', () => {
    const { getByTestId } = render(
      <TestProvider path="/">
        <ItemsSubContentDeletedCalendarItems />
      </TestProvider>,
    );

    expect(getByTestId('Scrollbar')).toBeVisible();
  });
});
