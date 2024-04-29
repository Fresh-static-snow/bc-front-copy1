import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import ItemsSubContentBranding from '../../ui/Management/ui/ItemsSubContentBranding/ItemsSubContentBranding';

describe('pages/desktop/Management/ItemsSubContentBranding', () => {
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

  test('render ItemsSubContentBranding with no items', () => {
    const { getByTestId } = render(
      <TestProvider>
        <ItemsSubContentBranding />
      </TestProvider>,
    );

    expect(getByTestId('CircularLoader')).toBeVisible();
  });
});
