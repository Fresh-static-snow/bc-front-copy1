import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { UseCustomSearchParams } from '@/shared/lib/hooks/useCustomSearchParams/useCustomSearchParams.types';

import { CheckEmail } from '../ui/CheckEmail/CheckEmail';

vi.mock('@/entities/auth', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/auth')>('@/entities/auth');
  const mockedModule: DeepPartial<typeof import('@/entities/auth')> = {
    ...actualModule,
    useEmailChecking: () =>
      mock({
        isSuccess: false,
      }),
  };

  return mockedModule;
});

vi.mock('@/shared/lib', async () => {
  const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
  const mockedModule: DeepPartial<typeof import('@/shared/lib')> = {
    ...actualModule,
    useCustomSearchParams: () =>
      ({ params: { invitation_token: '' } } as unknown as UseCustomSearchParams),
  };

  return mockedModule;
});

describe('features/auth/CheckEmail', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CheckEmail', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <CheckEmail />
      </TestProvider>,
    );
    fireEvent.input(getByTestId('PrimaryInput-email'), { target: { value: 'Artem@mail.com' } });
    expect(getByTestId('PrimaryInput-email')).toHaveValue('Artem@mail.com');

    fireEvent.click(getByText('Send'));
  });
});
