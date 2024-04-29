import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { ResetPassword } from '../ui/ResetPassword/ResetPassword';

vi.mock('@/shared/lib', async () => {
  const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
  const mockedModule: DeepPartial<typeof import('@/shared/lib')> = {
    ...actualModule,
    useCustomSearchParams: () => ({ params: { invitation_token: '' } }),
  };

  return mockedModule;
});

vi.mock('@/entities/auth', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/auth')>('@/entities/auth');
  const mockedModule: DeepPartial<typeof import('@/entities/auth')> = {
    ...actualModule,
    useChangePassword: () =>
      mock({
        isSuccess: false,
      }),
  };

  return mockedModule;
});

describe('features/auth/ResetPassword', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render ResetPassword', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <ResetPassword />
      </TestProvider>,
    );
    fireEvent.input(getByTestId('PrimaryInput-password'), { target: { value: 'Artem' } });
    fireEvent.input(getByTestId('PrimaryInput-passwordConfirm'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-password')).toHaveValue('Artem');
    expect(getByTestId('PrimaryInput-passwordConfirm')).toHaveValue('Artem');
    fireEvent.click(getByText('Send'));
  });
});
