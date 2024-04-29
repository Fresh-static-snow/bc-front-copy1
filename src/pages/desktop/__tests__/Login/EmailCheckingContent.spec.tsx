import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { UseCustomSearchParams } from '@/shared/lib/hooks/useCustomSearchParams/useCustomSearchParams.types';

import EmailCheckingContent from '../../ui/Login/ui/EmailCheckingContent/EmailCheckingContent';

vi.mock('@/shared/lib', async () => {
  const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
  const mockedModule: DeepPartial<typeof import('@/shared/lib')> = {
    ...actualModule,
    useCustomSearchParams: () =>
      ({ params: { invitation_token: '' } } as unknown as UseCustomSearchParams),
  };

  return mockedModule;
});

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

describe('pages/desktop/Login/EmailCheckingContent', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render EmailCheckingContent', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <EmailCheckingContent />
      </TestProvider>,
    );
    fireEvent.input(getByTestId('PrimaryInput-email'), { target: { value: 'Artem@mail.com' } });

    fireEvent.click(getByText('Send'));
  });
});
