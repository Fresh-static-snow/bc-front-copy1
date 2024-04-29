import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { SecondaryFormFooter } from '..';

describe('ui/SecondaryFormFooter', () => {
  test('render PrimaryFormFooter', () => {
    const { getByText } = render(
      <TestProvider>
        <SecondaryFormFooter isDirty CustomComponent={<div>CustomComponent</div>} withDelete />
      </TestProvider>,
    );

    expect(getByText('CustomComponent')).toBeVisible();
    expect(getByText('Delete')).toBeVisible();
  });
});
