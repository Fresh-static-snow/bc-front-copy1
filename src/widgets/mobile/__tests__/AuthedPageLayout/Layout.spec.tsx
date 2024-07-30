import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { Branding } from '@/shared/types/entities.types';

import { Layout } from '../../ui/AuthedPageLayout/ui/Layout/Layout';

describe('widgets/AuthedPageLayout', () => {
  beforeEach(() => {
    const ResizeObserver = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal('ResizeObserver', ResizeObserver);
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
  vi.mock('@/entities/branding', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/branding')>(
      '@/entities/branding',
    );
    const mockedModule: DeepPartial<typeof import('@/entities/branding')> = {
      ...actualModule,
      useGetBrandingMain: () => mock<UseQueryResult<Branding, unknown>>({}, { deep: true }),
    };

    return mockedModule;
  });

  vi.mock('@/shared/model/auth/auth.store', async () => {
    const actualModule = await vi.importActual<typeof import('@/shared/model/auth/auth.store')>(
      '@/shared/model/auth/auth.store',
    );
    const mockedModule = {
      ...actualModule,
      useAuthStore: () => ({ display_name: '', avatar: { url: '' } }),
    };

    return mockedModule;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render AuthedPageLayout and open notifications', () => {
    const labelText = 'Lorem ipsum';

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<div>{labelText}</div>} />
        </Route>,
      ),
    );

    const { getByText } = render(
      <TestProvider customRouter>
        <RouterProvider router={router} />
      </TestProvider>,
    );

    expect(getByText(labelText)).toBeVisible();
  });
});
