import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { Route } from 'react-router-dom';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import PageLayout from '../../ui/Account/ui/PageLayout/PageLayout';
import PasswordContent from '../../ui/Account/ui/PasswordContent/PasswordContent';
import { UserInfo } from '../../ui/Account/ui/UserContent/ui/UserInfo/UserInfo';

describe('pages/desktop/Account', () => {
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
  beforeEach(() => {
    const ResizeObserver = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal('ResizeObserver', ResizeObserver);
  });

  afterEach(() => {
    vi.resetModules();
    vi.resetAllMocks();
    vi.restoreAllMocks();
    vi.clearAllMocks();
  });

  it('render Account Page', () => {
    const labelText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider customRoute>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<div>{labelText}</div>} />
        </Route>
      </TestProvider>,
    );

    expect(getByText(labelText)).toBeVisible();
  });

  it('render Account PasswordContent', () => {
    const { getByText, getAllByTestId } = render(
      <TestProvider customRoute>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<PasswordContent />} />
        </Route>
      </TestProvider>,
    );

    expect(getByText('Old password')).toBeVisible();
    expect(getByText('New password')).toBeVisible();
    expect(getByText('Repeat new password')).toBeVisible();
    expect(getAllByTestId('PrimaryInput')).toHaveLength(3);
  });

  it('render Account UserInfo', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UserInfo />
      </TestProvider>,
    );

    expect(getByTestId('Avatar')).toBeVisible();

    fireEvent.click(getByTestId('Avatar'));

    expect(getByText('Edit')).toBeVisible();
  });
});
