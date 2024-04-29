import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { AvatarBadge } from '..';

describe('ui/AvatarBadge', () => {
  test('render AvatarBadge', () => {
    const { getByText } = render(
      <TestProvider>
        <AvatarBadge option={{ label: 'Lorem', value: 'Lorem' }} />
      </TestProvider>,
    );

    expect(getByText('L')).toBeVisible();
  });

  test('render AvatarBadge with input', () => {
    const { getByText } = render(
      <TestProvider>
        <AvatarBadge option={{ label: 'Lorem', value: 'Lorem' }} type="input" />
      </TestProvider>,
    );

    expect(getByText('L')).toBeVisible();
  });
});
