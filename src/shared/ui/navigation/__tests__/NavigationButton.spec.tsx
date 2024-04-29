import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { NavigationButton } from '..';

describe('ui/NavigationButton', () => {
  test('render NavigationButton', () => {
    const buttonText = 'Lorem ipsum';

    const navigationButtonScreen = render(
      <TestProvider>
        <NavigationButton>{buttonText}</NavigationButton>
      </TestProvider>,
    );

    expect(navigationButtonScreen.getByText(buttonText)).toBeVisible();
  });

  test('render NavigationButton with props', () => {
    const buttonText = 'Lorem ipsum';

    const navigationButtonScreen = render(
      <TestProvider>
        <NavigationButton
          href=""
          activePathExact
          height="2px"
          innerBorder
          onClick={vi.fn()}
          padding="2px"
          tag="button"
          width="2px"
          variant="avatar"
        >
          {buttonText}
        </NavigationButton>
        <NavigationButton variant="avatar" />
        <NavigationButton variant="base" activePathString="lorem" />
        <NavigationButton variant="colored" activePathString="lorem" />
        <NavigationButton variant="primary" activePathString="lorem" />
        <NavigationButton variant="secondary" activePathString="lorem" />
        <NavigationButton variant="avatar" activePathString="/" />
        <NavigationButton variant="base" activePathString="/" />
        <NavigationButton variant="colored" activePathString="/" />
        <NavigationButton variant="primary" activePathString="/" />
        <NavigationButton variant="secondary" activePathString="/" />

        <NavigationButton
          variant="avatar"
          activePathString="/"
          activePathExact
          innerBorder
          onClick={() => {}}
        />
      </TestProvider>,
    );

    expect(navigationButtonScreen.getByText(buttonText)).toBeVisible();
  });
});
