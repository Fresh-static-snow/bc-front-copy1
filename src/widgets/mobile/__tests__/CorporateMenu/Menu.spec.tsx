import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Menu } from '../../ui/CorporateMenu/ui/Menu/Menu';

describe('widgets/desktop/CorporateMenuMobile', () => {
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
  vi.mock('@/entities/corporate', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/corporate')>(
      '@/entities/corporate',
    );
    const mockedModule: DeepPartial<typeof import('@/entities/corporate')> = {
      ...actualModule,
      useGetCorporate: () => ({
        isLoading: true,
        data: { comments_count: null, name: 'Test Title' },
      }),
    };

    return mockedModule;
  });
  vi.mock('@/shared/lib', async () => {
    const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
    const mockedModule: DeepPartial<typeof import('@/shared/lib')> = {
      ...actualModule,
      useHasAccess: () => true,
    };

    return mockedModule;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render CorporateMenu', () => {
    const { getByText, getByTestId, queryByText } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    expect(getByTestId('back-button')).toBeVisible();
    // expect(getByTestId('edit-button')).toBeVisible();
    expect(getByText('Test Title')).toBeVisible();
    expect(getByText('Main')).toBeVisible();
    fireEvent.click(getByText('Main'));
    expect(queryByText('Main')).toBeNull();
  });
});
