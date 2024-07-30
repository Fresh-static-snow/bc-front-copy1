import { UseQueryResult } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useGetSegmentMedia } from '@/entities/event-segment';
import { GetSegmentMediasResponse } from '@/entities/event-segment/api/eventSegment.service.types';

import MediaContent from '../../ui/DetailedSegment/ui/MediaContent/MediaContent';

describe('pages/desktop/DetailedSegment/MediaContent', () => {
  vi.mock('@/entities/event-segment');

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render Media', () => {
    vi.mocked(useGetSegmentMedia).mockReturnValue({
      data: [
        {
          id: 1,
          description: '',
          title: '',
          updated_at: '',
        },
      ],
    } as UseQueryResult<GetSegmentMediasResponse>);

    const { getByText } = render(
      <TestProvider>
        <MediaContent />
      </TestProvider>,
    );

    expect(getByText('Last update')).toBeVisible();
  });

  it('render Media with no items', () => {
    vi.mocked(useGetSegmentMedia).mockReturnValue({
      data: [],
    } as unknown as UseQueryResult<GetSegmentMediasResponse, unknown>);

    const { getByText } = render(
      <TestProvider>
        <MediaContent />
      </TestProvider>,
    );

    expect(getByText('There are no media yet.')).toBeVisible();
  });
});
