import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { PageNotFound } from '..';

describe('ui/PageNotFound', () => {
  test('render PageNotFound', () => {
    const { getByText } = render(
      <TestProvider>
        <PageNotFound />
      </TestProvider>,
    );

    expect(getByText('Page not found')).toBeVisible();
  });
});
