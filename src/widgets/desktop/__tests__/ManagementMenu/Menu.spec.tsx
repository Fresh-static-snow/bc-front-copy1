import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useHasAccess } from '@/shared/lib';

import { Menu } from '../../ui/ManagementMenu/ui/Menu/Menu';

describe('widgets/desktop/ManagementMenu', () => {
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
  vi.mock('@/shared/lib');
  vi.mocked(useHasAccess).mockReturnValue(true);

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render ManagementMenu', () => {
    const { getByTestId, getByText } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    expect(getByText('Users')).toBeVisible();
    expect(getByText('Items')).toBeVisible();
    expect(getByText('Create Item')).toBeVisible();
    fireEvent.click(getByText('Create Item'));
    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'test' } });
    expect(getByTestId('PrimaryInput-name')).toHaveValue('test');
    fireEvent.click(getByText('Create'));
    fireEvent.click(getByText('Cancel'));
    fireEvent.click(getByText('Create Item'));
    fireEvent.click(getByText('Users'));
  });
});
