import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { NavigationMenuAccordionButton } from '..';

describe('ui/NavigationMenuAccordionButton', () => {
  it('render NavigationMenuAccordionButton', () => {
    const titleText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <NavigationMenuAccordionButton title={titleText} count={2} defaultExpandedStatus>
          2
        </NavigationMenuAccordionButton>
      </TestProvider>,
    );

    expect(getByText(titleText)).toBeVisible();
  });
});
