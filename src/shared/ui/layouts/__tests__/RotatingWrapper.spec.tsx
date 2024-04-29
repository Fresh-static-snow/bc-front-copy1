import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Rotate } from '..';

describe('ui/Rotate', () => {
  test('render Rotate', () => {
    const { getByTestId } = render(
      <TestProvider>
        <Rotate>
          <div />
        </Rotate>
      </TestProvider>,
    );

    expect(getByTestId('Rotate')).toBeVisible();
  });

  test('render Rotate with props', () => {
    const { getByTestId } = render(
      <TestProvider>
        <Rotate rotateDeg={90}>
          <div />
        </Rotate>
      </TestProvider>,
    );

    expect(getByTestId('Rotate')).toBeVisible();
  });
});
