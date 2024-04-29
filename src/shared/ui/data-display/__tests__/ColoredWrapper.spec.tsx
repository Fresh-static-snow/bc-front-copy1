import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { BackgroundColor } from '..';

describe('ui/BackgroundColor', () => {
  test('render BackgroundColor', () => {
    const labelText = 'Lorem ipsum';
    const coloredTextScreen = render(
      <TestProvider>
        <BackgroundColor>{labelText}</BackgroundColor>
      </TestProvider>,
    );

    expect(coloredTextScreen.getByText(labelText)).toBeVisible();
  });

  test('render BackgroundColor with props', () => {
    const labelText = 'Lorem ipsum';
    const labelText2 = 'Lorem ipsum2';
    const coloredTextScreen = render(
      <TestProvider>
        <BackgroundColor baseColor="#" borderWrapper colorIndicator stripes>
          {labelText}
        </BackgroundColor>
        <BackgroundColor colorIndicator stripes>
          {labelText2}
        </BackgroundColor>
      </TestProvider>,
    );

    expect(coloredTextScreen.getByText(labelText)).toBeVisible();
    expect(coloredTextScreen.getByText(labelText2)).toBeVisible();
  });
});
