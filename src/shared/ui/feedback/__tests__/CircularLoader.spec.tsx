import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CircularLoader } from '..';

describe('ui/CircularLoader', () => {
  test('render CircularLoader', () => {
    const circularLoaderScreen = render(
      <TestProvider>
        <CircularLoader />
      </TestProvider>,
    );

    expect(circularLoaderScreen.getByTestId('CircularLoader')).toBeVisible();
  });

  test('render CircularLoader with props', () => {
    const circularLoaderScreen = render(
      <TestProvider>
        <CircularLoader size="2px" color="#" />
      </TestProvider>,
    );

    expect(circularLoaderScreen.getByTestId('CircularLoader')).toBeVisible();
  });
});
