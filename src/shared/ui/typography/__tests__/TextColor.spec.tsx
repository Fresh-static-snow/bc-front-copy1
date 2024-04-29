import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { TextColor } from '..';

describe('ui/ColoredText', () => {
  test('render TextColor loader', () => {
    const labelText = 'Lorem ipsum';
    const coloredTextScreen = render(
      <TestProvider>
        <TextColor text={labelText} secondaryColor="#" />
      </TestProvider>,
    );

    expect(coloredTextScreen.getByText(labelText)).toBeVisible();
  });

  test('render TextColor with props', () => {
    const labelText = 'Lorem ipsum';
    const coloredTextScreen = render(
      <TestProvider>
        <TextColor
          text={labelText}
          secondaryColor="#"
          fontSize="2px"
          limitedWidth
          lineHeight="2px"
          fontWeight="600"
        />
      </TestProvider>,
    );

    expect(coloredTextScreen.getByText(labelText)).toBeVisible();
  });
});
