import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Avatar } from '..';

describe('ui/Avatar', () => {
  test('render Avatar', () => {
    const avatarScreen = render(
      <TestProvider>
        <Avatar name="name name" image="" backgroundColor="#" borderColor="#" withShadow />
      </TestProvider>,
    );

    expect(avatarScreen.getByText('NN')).toBeVisible();
  });

  test('render Avatar without props', () => {
    const avatarScreen = render(
      <TestProvider>
        <Avatar name="" image="" />
      </TestProvider>,
    );

    expect(avatarScreen.getByTestId('Avatar')).toBeInTheDocument();
  });
});
