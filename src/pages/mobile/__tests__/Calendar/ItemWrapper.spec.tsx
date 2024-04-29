import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { ItemWrapper } from '../../ui/Calendar/ui/ItemWrapper/ItemWrapper';

describe('pages/desktop/Calendar/ItemWrapper', () => {
  it('render ItemWrapper', () => {
    const labelText = 'Lorem ipsum';
    const { getByText } = render(
      <TestProvider>
        <ItemWrapper>{labelText}</ItemWrapper>
      </TestProvider>,
    );

    expect(getByText(labelText)).toBeVisible();
  });
});
