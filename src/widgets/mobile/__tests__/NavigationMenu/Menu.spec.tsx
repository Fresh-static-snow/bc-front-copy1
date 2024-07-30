import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { NavigationMenu } from '../../ui/NavigationMenu';

describe('widgets/NavigationMenu', () => {
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

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render NavigationMenu', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <NavigationMenu />
      </TestProvider>,
    );

    fireEvent.click(getByTestId('AvatarButton'));

    expect(getByText('Calendar')).toBeInTheDocument();
    expect(getByText('Help')).toBeInTheDocument();
    expect(getByText('Logout')).toBeInTheDocument();
  });
});
