import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { UseCustomSearchParams } from '@/shared/lib/hooks/useCustomSearchParams/useCustomSearchParams.types';

import ResetPasswordContent from '../../ui/Login/ui/ResetPasswordContent/ResetPasswordContent';

vi.mock('@/shared/lib', async () => {
  const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
  const mockedModule: DeepPartial<typeof import('@/shared/lib')> = {
    ...actualModule,
    useCustomSearchParams: () =>
      ({ params: { reset_password_token: '' } } as unknown as UseCustomSearchParams),
  };

  return mockedModule;
});

vi.mock('@/entities/auth', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/auth')>('@/entities/auth');
  const mockedModule: DeepPartial<typeof import('@/entities/auth')> = {
    ...actualModule,
    useChangePassword: () => mock({ isSuccess: false }),
  };

  return mockedModule;
});

describe('pages/desktop/Login/ResetPasswordContent', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render Login ResetPasswordContent', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <ResetPasswordContent />
      </TestProvider>,
    );
    fireEvent.input(getByTestId('PrimaryInput-password'), { target: { value: 'Artem' } });
    fireEvent.input(getByTestId('PrimaryInput-passwordConfirm'), { target: { value: 'Artem' } });

    fireEvent.click(getByText('Send'));
  });
});
