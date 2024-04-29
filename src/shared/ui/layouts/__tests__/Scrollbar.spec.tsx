import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Scrollbar } from '..';

describe('ui/Scrollbar', () => {
  it('render Scrollbar', () => {
    const scrollbarText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <Scrollbar>{scrollbarText}</Scrollbar>
      </TestProvider>,
    );

    expect(getByText(scrollbarText)).toBeVisible();
  });

  it('render not active Scrollbar', () => {
    const scrollbarText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <Scrollbar active={false}>{scrollbarText}</Scrollbar>
      </TestProvider>,
    );

    expect(getByText(scrollbarText)).toBeVisible();
  });
});
