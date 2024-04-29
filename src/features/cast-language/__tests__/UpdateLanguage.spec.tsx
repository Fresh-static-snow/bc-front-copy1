import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { UpdateLanguage } from '..';

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

vi.mock('@/entities/cast-language', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/cast-language')>(
    '@/entities/cast-language',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/cast-language')> = {
    ...actualModule,
    useGetCastLanguageForm: () =>
      mock({
        isSuccess: true,
        isFetching: false,
      }),
  };

  return mockedModule;
});

describe('features/cast-language/UpdateLanguage', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateLanguage', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateLanguage
          requestType={{ label: 'Lorem', value: 'Lorem', additional: '1' }}
          setEntityModal={vi.fn()}
        />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-name')).toHaveValue('Artem');
    fireEvent.input(getByTestId('PrimaryInput-keyword'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-keyword')).toHaveValue('Artem');
    expect(getByText('Update')).toBeVisible();

    fireEvent.click(getByText('Update'));
  });
});
