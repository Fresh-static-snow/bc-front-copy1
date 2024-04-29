import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Checkbox } from '..';

describe('ui/Checkbox', () => {
  test('render Checkbox and click', () => {
    const labelText = 'Lorem ipsum';
    const checkBoxScreen = render(
      <TestProvider>
        <Checkbox checked={false} label={labelText} />
      </TestProvider>,
    );

    fireEvent.click(checkBoxScreen.getByText(labelText));

    expect(checkBoxScreen.getByText(labelText)).toBeVisible();
  });

  test('render Checkbox disabled', () => {
    const labelText = 'Lorem ipsum';
    const checkBoxScreen = render(
      <TestProvider>
        <Checkbox disabled checked label={labelText} />
      </TestProvider>,
    );

    fireEvent.click(checkBoxScreen.getByText(labelText));

    expect(checkBoxScreen.getByText(labelText)).toBeVisible();
  });
});
