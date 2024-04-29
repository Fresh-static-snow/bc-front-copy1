import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { AcceptInvitation } from '..';

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

describe('features/auth/AcceptInvitation', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render AcceptInvitation', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <AcceptInvitation />
      </TestProvider>,
    );
    fireEvent.input(getByTestId('PrimaryInput-password'), { target: { value: 'Artem' } });
    fireEvent.input(getByTestId('PrimaryInput-passwordConfirm'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-password')).toHaveValue('Artem');
    expect(getByTestId('PrimaryInput-passwordConfirm')).toHaveValue('Artem');
    fireEvent.click(getByText('Send'));
  });
});
