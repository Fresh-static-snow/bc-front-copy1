import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { EmptyContent } from '../../ui/Calendar/ui/EmptyContent/EmptyContent';

describe('pages/desktop/Calendar/EmptyContent', () => {
  it('render EmptyContent', () => {
    const labelText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <EmptyContent>{labelText}</EmptyContent>
      </TestProvider>,
    );

    expect(getByText(labelText)).toBeVisible();
  });
});
