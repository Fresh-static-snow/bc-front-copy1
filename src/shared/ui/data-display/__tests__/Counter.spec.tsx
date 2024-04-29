import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Counter } from '..';

describe('ui/Counter', () => {
  test('render Counter', () => {
    const counterScreen = render(
      <TestProvider>
        <Counter count={2} />
      </TestProvider>,
    );

    expect(counterScreen.getByTestId('Counter')).toBeVisible();
  });

  test('render Counter with props', () => {
    const counterScreen = render(
      <TestProvider>
        <Counter count={2} maxCount={2} />
      </TestProvider>,
    );

    expect(counterScreen.getByTestId('Counter')).toBeVisible();
  });
});
