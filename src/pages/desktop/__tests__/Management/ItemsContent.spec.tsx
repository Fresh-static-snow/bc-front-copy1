import { render, waitFor } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import ItemsContent from '../../ui/Management/ui/ItemsContent/ItemsContent';

describe('pages/desktop/Management/ItemsContent', () => {
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

  test('render ItemsContent', async () => {
    const { getByTestId } = render(
      <TestProvider>
        <ItemsContent />
      </TestProvider>,
    );

    await waitFor(() => {
      expect(getByTestId('CircularLoader')).toBeVisible();
    });
  });
});
