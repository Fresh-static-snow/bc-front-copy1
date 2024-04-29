import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import LoginContent from '../../ui/Login/ui/LoginContent/LoginContent';

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

describe('pages/desktop/Login/LoginContent', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render LoginContent', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <LoginContent />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-password'), { target: { value: 'Artem@mail.com' } });
    fireEvent.input(getByTestId('PrimaryInput-email'), { target: { value: 'Artem' } });

    fireEvent.click(getByText('SIGN IN'));
  });
});
