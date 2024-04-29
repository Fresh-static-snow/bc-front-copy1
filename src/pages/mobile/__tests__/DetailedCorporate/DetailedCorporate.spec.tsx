import { render } from '@testing-library/react';
import { Route } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import PageLayout from '../../ui/DetailedCorporate/ui/PageLayout/PageLayout';

describe('pages/desktop/DetailedCorporateMobile', () => {
  it('render DetailedCorporate Page', () => {
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
