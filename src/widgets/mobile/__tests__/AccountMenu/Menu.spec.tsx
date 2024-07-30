import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { Navigate, Route } from 'react-router-dom';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { AccountMenu } from '../../ui/AccountMenu';

describe('widgets/AccountMenu', () => {
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

  it('render AccountMenu', () => {
    const { getByText } = render(
      <TestProvider customRoute>
        <Route path="/" element={<AccountMenu />} />
      </TestProvider>,
    );

    expect(getByText('Profile')).toBeVisible();
    expect(getByText('Notification')).toBeVisible();
  });

  it('render AccountMenu password page', () => {
    const { getByText } = render(
      <TestProvider customRoute path="/password">
        <Route path="/password" element={<AccountMenu />} />
        <Route path="*" element={<Navigate replace to="/password" />} />
      </TestProvider>,
    );

    expect(getByText('Change Password')).toBeVisible();
  });
});
