import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import InvitationContent from '../../ui/Login/ui/InvitationContent/InvitationContent';

vi.mock('@/entities/auth', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/auth')>('@/entities/auth');
  const mockedModule: DeepPartial<typeof import('@/entities/auth')> = {
    ...actualModule,
    useInvitation: () =>
      mock({
        isLoading: false,
      }),
  };

  return mockedModule;
});

describe('pages/desktop/Login/InvitationContent', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render InvitationContent', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <InvitationContent />
      </TestProvider>,
    );
    fireEvent.input(getByTestId('PrimaryInput-password'), { target: { value: 'Artem' } });
    fireEvent.input(getByTestId('PrimaryInput-passwordConfirm'), { target: { value: 'Artem' } });
    fireEvent.input(getByTestId('PrimaryInput-passwordConfirm'), { target: { value: 'Artem' } });

    fireEvent.click(getByText('Send'));
  });
});
