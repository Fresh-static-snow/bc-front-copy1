import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CreateSimpleEntityItem } from '../ui/CreateSimpleEntityItem/CreateSimpleEntityItem';

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

describe('features/management/CreateSimpleEntityItem', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CreateSimpleEntityItem', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <CreateSimpleEntityItem
          requestType={{ label: 'studio', value: 'studio', additional: '1' }}
          setEntityModal={vi.fn()}
        />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-name')).toHaveValue('Artem');

    expect(getByText('Create')).toBeVisible();
    fireEvent.click(getByText('Create'));
  });
});
