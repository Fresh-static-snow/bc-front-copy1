import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { NavigationMenuSimpleButton } from '..';

describe('ui/NavigationMenuSimpleButton', () => {
  it('render NavigationMenuSimpleButton', () => {
    const { getByText } = render(
      <TestProvider>
        <NavigationMenuSimpleButton
          linkPath=""
          count={2}
          padding="2px"
          variant="avatar"
          activePathExact
        />
      </TestProvider>,
    );

    expect(getByText(2)).toBeVisible();
  });
});
