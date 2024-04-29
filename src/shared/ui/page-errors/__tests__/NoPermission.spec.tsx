import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { NoPermissions } from '..';

describe('ui/NoPermissions', () => {
  test('render NoPermissions', () => {
    const { getByText } = render(
      <TestProvider>
        <NoPermissions />
      </TestProvider>,
    );

    expect(getByText('No permissions')).toBeVisible();
  });
});
