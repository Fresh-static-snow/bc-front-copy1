import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { PrimarySelectableValue } from '@/shared/types/values.types';

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

  vi.mock('@/entities/branding', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/branding')>(
      '@/entities/branding',
    );
    const mockedModule: DeepPartial<typeof import('@/entities/branding')> = {
      ...actualModule,
      useGetBrandingOptions: () => ({
        data: [{ label: 'Lorem', value: 'Lorem' }] as PrimarySelectableValue[],
      }),
    };

    return mockedModule;
  });

  test('render ItemsSubContentBranding', () => {
    const { getByTestId, getByText } = render(
      <TestProvider>
        <ItemsSubContentBranding />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();

    fireEvent.click(getByText('Lorem'));
    fireEvent.click(getByTestId('Switch').children[0].children[0].children[0]);

    fireEvent.click(getByTestId('Edit'));

    fireEvent.click(getByTestId('Delete'));

    expect(getByText('OK')).toBeVisible();
    fireEvent.click(getByText('OK'));
  });
});
