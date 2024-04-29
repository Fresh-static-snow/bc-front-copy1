import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Switch } from '..';

describe('ui/Switch', () => {
  test('render Switch', () => {
    const labelText = 'Lorem ipsum';
    const switchScreen = render(
      <TestProvider>
        <Switch checked onChange={vi.fn()} disabled label={labelText} />
      </TestProvider>,
    );

    expect(switchScreen.getByText(labelText)).toBeVisible();
  });
});
