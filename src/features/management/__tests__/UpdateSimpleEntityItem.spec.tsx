import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { UpdateSimpleEntityItem } from '../ui/UpdateSimpleEntityItem/UpdateSimpleEntityItem';

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

vi.mock('@/entities/cast-studio', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/cast-studio')>(
    '@/entities/cast-studio',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/cast-studio')> = {
    ...actualModule,
    useGetCastStudioForm: () => ({
      isSuccess: true,
      isFetching: false,
    }),
  };

  return mockedModule;
});

describe('features/management/UpdateSimpleEntityItem', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateSimpleEntityItem', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateSimpleEntityItem
          requestType={{ label: 'studio', value: 'studio', additional: '1' }}
          setEntityModal={vi.fn()}
        />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-name')).toHaveValue('Artem');

    expect(getByText('Update')).toBeVisible();
    fireEvent.click(getByText('Update'));
  });
});
