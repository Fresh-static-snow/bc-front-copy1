import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { NavigationItem } from '..';

describe('views/Management/ui/NavigationItem', () => {
  it('render NavigationItem', () => {
    const titleText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <NavigationItem
          linkPath=""
          name={titleText}
          avatarImage=""
          AdditionalComponent
          activePathExact
          padding="2px"
          variant="avatar"
        />
      </TestProvider>,
    );

    expect(getByText(titleText)).toBeVisible();
  });
});
