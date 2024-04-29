import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import PageLayout from '../../ui/Management/ui/PageLayout/PageLayout';

describe('pages/desktop/Management/PageLayout', () => {
  test('render PageLayout', () => {
    const labelText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider customRoute>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<div>{labelText}</div>} />
        </Route>
      </TestProvider>,
    );

    expect(getByText(labelText)).toBeVisible();
  });
});
