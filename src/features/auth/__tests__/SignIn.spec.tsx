import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { SignIn } from '../ui/SignIn/SignIn';

vi.mock('@/entities/auth', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/auth')>('@/entities/auth');
  const mockedModule: DeepPartial<typeof import('@/entities/auth')> = {
    ...actualModule,
    useLogin: () =>
      mock({
        isLoading: false,
      }),
  };

  return mockedModule;
});

describe('views/Login/components/LoginForm', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render Login LoginForm', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <SignIn />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-password'), { target: { value: 'Artem' } });
    fireEvent.input(getByTestId('PrimaryInput-email'), { target: { value: 'Artem@mail.com' } });
    expect(getByTestId('PrimaryInput-password')).toHaveValue('Artem');
    expect(getByTestId('PrimaryInput-email')).toHaveValue('Artem@mail.com');

    fireEvent.click(getByText('SIGN IN'));
  });
});
