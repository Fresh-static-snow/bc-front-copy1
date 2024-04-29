import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { Route } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import PageLayout from '../../ui/DetailedTournament/ui/PageLayout/PageLayout';

describe('pages/desktop/DetailedTournamentMobile', () => {
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

  it('render DetailedTournament Page', () => {
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
});
