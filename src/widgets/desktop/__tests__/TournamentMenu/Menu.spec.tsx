import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useHasAccess } from '@/shared/lib';

import { Menu } from '../../ui/TournamentMenu/ui/Menu/Menu';

describe('widgets/desktop/TournamentMenu', () => {
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
  vi.mock('react-router-dom', async () => {
    const actualModule = await vi.importActual<typeof import('react-router-dom')>(
      'react-router-dom',
    );

    return {
      ...actualModule,
      useParams: () => ({
        id: '1',
      }),
    };
  });
  vi.mock('@/entities/tournament', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/tournament')>(
      '@/entities/tournament',
    );
    const mockedModule: DeepPartial<typeof import('@/entities/tournament')> = {
      ...actualModule,
      useGetTournament: () => ({
        data: { title: '' },
      }),
    };

    return mockedModule;
  });
  vi.mock('@/shared/lib');
  vi.mocked(useHasAccess).mockReturnValue(true);

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render TournamentMenu', () => {
    const { getByText, queryByText } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    expect(getByText('Main')).toBeVisible();
    fireEvent.click(getByText('Main'));
    expect(queryByText('Main')).toBeNull();
  });
});
