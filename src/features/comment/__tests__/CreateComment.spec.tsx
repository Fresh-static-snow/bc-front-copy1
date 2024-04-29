import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CreateComment } from '..';

vi.mock('@/shared/api', async () => {
  const actualModule = await vi.importActual<typeof import('@/shared/api')>('@/shared/api');
  const mockedModule: DeepPartial<typeof import('@/shared/api')> = {
    ...actualModule,
    axiosInstance: {
      delete: vi.fn(),
      get: vi.fn(),
      post: vi.fn(),
      patch: vi.fn(),
      put: vi.fn(),
      interceptors: {
        response: {
          use: vi.fn(),
        },
      },
    },
  };

  return mockedModule;
});

describe('features/comment/CreateComment', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CreateComment', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <CreateComment entityType="Corporate" />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('Comments-textarea'), { target: { value: 'Artem' } });
    expect(getByTestId('Comments-textarea')).toHaveValue('Artem');
    expect(getByText('Send')).toBeVisible();

    fireEvent.click(getByText('Send'));
  });
});
