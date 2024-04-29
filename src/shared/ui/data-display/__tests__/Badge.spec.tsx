import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Badge } from '..';

describe('ui/Badge', () => {
  test('render Badge', () => {
    const badgeScreen = render(
      <TestProvider>
        <Badge baseColor="#" secondaryColor="#" text="text" />
      </TestProvider>,
    );

    expect(badgeScreen.getByText('text')).toBeVisible();
  });

  test('render Badge without baseColor', () => {
    const badgeScreen = render(
      <TestProvider>
        <Badge secondaryColor="#" text="text" />
      </TestProvider>,
    );

    expect(badgeScreen.getByText('text')).toBeVisible();
  });
});
