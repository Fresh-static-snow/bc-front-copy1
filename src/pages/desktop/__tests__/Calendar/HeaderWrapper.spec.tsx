import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { HeaderWrapper } from '../../ui/Calendar/ui/HeaderWrapper/HeaderWrapper';

describe('pages/desktop/Calendar/HeaderWrapper', () => {
  it('render HeaderWrapper', () => {
    const labelText = 'Lorem ipsum';
    const { getByText } = render(
      <TestProvider>
        <HeaderWrapper>{labelText}</HeaderWrapper>
      </TestProvider>,
    );

    expect(getByText(labelText)).toBeVisible();
  });
});
