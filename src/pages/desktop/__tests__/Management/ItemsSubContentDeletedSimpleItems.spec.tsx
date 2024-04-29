import { render, waitFor } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import ItemsSubContentDeletedSimpleItems from '../../ui/Management/ui/ItemsSubContentDeletedSimpleItems/ItemsSubContentDeletedSimpleItems';

vi.mock('react-router-dom', async () => {
  const actualModule = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  const mockedModule = {
    ...actualModule,
    matchPath: () => ({
      params: {
        type: 'studio',
      },
    }),
  };

  return mockedModule;
});

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

describe('pages/desktop/Management/ItemsSubContentDeletedSimpleItems', () => {
  test('render ItemsSubContentDeletedSimpleItems with basic route', async () => {
    const { getByTestId } = render(
      <TestProvider path="/">
        <ItemsSubContentDeletedSimpleItems />
      </TestProvider>,
    );

    await waitFor(() => {
      expect(getByTestId('Scrollbar')).toBeVisible();
    });
  });
});
