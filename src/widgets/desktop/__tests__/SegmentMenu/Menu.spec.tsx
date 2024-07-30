import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useHasAccess } from '@/shared/lib';

import { Menu } from '../../ui/SegmentMenu/ui/Menu/Menu';

describe('widgets/desktop/SegmentMenu', () => {
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
  vi.mock('@/entities/event-segment', async () => {
    const actualModule = await vi.importActual<typeof import('@/entities/event-segment')>(
      '@/entities/event-segment',
    );
    const mockedModule: DeepPartial<typeof import('@/entities/event-segment')> = {
      ...actualModule,
      useGetSegment: () => ({
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

  test('render SegmentMenu', () => {
    const { getByText, queryByText } = render(
      <TestProvider>
        <Menu />
      </TestProvider>,
    );

    expect(getByText('Main')).toBeVisible();
    expect(getByText('Media')).toBeVisible();
    expect(getByText('Comments')).toBeVisible();
    fireEvent.click(getByText('Main'));
    expect(queryByText('Main')).toBeNull();
  });
});
