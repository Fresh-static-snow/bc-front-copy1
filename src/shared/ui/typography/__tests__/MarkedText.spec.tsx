import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { MarkedText } from '..';

describe('ui/MarkedText', () => {
  test('render MarkedText', () => {
    const labelText = 'Lorem ipsum';
    const labelText2 = 'Lorem ipsum2';
    const markedTextScreen = render(
      <TestProvider>
        <MarkedText>{labelText}</MarkedText>
        <MarkedText color="#">{labelText2}</MarkedText>
      </TestProvider>,
    );

    expect(markedTextScreen.getByText(labelText)).toBeVisible();
    expect(markedTextScreen.getByText(labelText2)).toBeVisible();
  });
});
