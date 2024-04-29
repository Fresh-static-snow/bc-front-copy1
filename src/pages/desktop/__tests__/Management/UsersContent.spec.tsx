import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import UsersContent from '../../ui/Management/ui/UsersContent/UsersContent';

describe('pages/desktop/Management/UsersContent', () => {
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

  test('render UsersContent', () => {
    const { getByTestId } = render(
      <TestProvider>
        <UsersContent />
      </TestProvider>,
    );

    expect(getByTestId('Scrollbar')).toBeVisible();
    expect(getByTestId('PrimaryInput')).toBeVisible();
  });
});
