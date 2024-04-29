import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { ContentWrapper } from '../../ui/Account/ui/ContentWrapper/ContentWrapper';
import PasswordContent from '../../ui/Account/ui/PasswordContent/PasswordContent';

describe('pages/mobile/Account/PasswordContent', () => {
  test('render PasswordContent', () => {
    const { getByText } = render(
      <TestProvider>
        <PasswordContent />
      </TestProvider>,
    );

    expect(getByText('New password')).toBeVisible();
    expect(getByText('Repeat new password')).toBeVisible();
    expect(getByText('Old password')).toBeVisible();
  });
});
