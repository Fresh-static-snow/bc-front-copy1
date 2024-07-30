import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { fireEvent, render } from '@testing-library/react';
import { AxiosError } from 'axios';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useCreateComment } from '@/entities/comment';
import { CreateCommentParams } from '@/entities/comment/api/comment.service.types';
import { useGetSegmentComments } from '@/entities/event-segment';
import { GetSegmentCommentsResponse } from '@/entities/event-segment/api/eventSegment.service.types';
import { useCheckAccess, useHasAccess } from '@/shared/lib';
import { AxiosErrorContent } from '@/shared/types/services.types';

import CommentsContent from '../../ui/DetailedSegment/ui/CommentsContent/CommentsContent';

describe('pages/desktop/DetailedSegment/CommentsContent', () => {
  vi.mock('@/shared/lib');
  vi.mock('@/entities/comment');
  vi.mock('@/entities/event-segment');

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CommentsContent', () => {
    vi.mocked(useGetSegmentComments).mockReturnValue({
      data: [],
    } as unknown as UseQueryResult<GetSegmentCommentsResponse, unknown>);
    vi.mocked(useCreateComment).mockReturnValue({
      mutate: vi.fn(),
    } as unknown as UseMutationResult<void, AxiosError<AxiosErrorContent, any>, CreateCommentParams, unknown>);
    vi.mocked(useCheckAccess).mockReturnValue(() => true);
    vi.mocked(useHasAccess).mockReturnValue(true);

    const { getByText } = render(
      <TestProvider>
        <CommentsContent />
      </TestProvider>,
    );

    expect(getByText('Send')).toBeVisible();
  });

  it('render CommentsContent', () => {
    vi.mocked(useGetSegmentComments).mockReturnValue({
      data: [{ id: 1, message: '', cover: '', time: '', user: { display_name: '', id: 1 } }],
    } as UseQueryResult<GetSegmentCommentsResponse, unknown>);
    vi.mocked(useCreateComment).mockReturnValue({
      mutate: vi.fn(),
    } as unknown as UseMutationResult<void, any, any>);
    vi.mocked(useCheckAccess).mockReturnValue(() => true);
    vi.mocked(useHasAccess).mockReturnValue(true);

    const { getByText, getByTestId } = render(
      <TestProvider>
        <CommentsContent />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('Comments-textarea'), { target: { value: 'Hello, world!' } });
    fireEvent.click(getByText('Send'));

    expect(getByText('Send')).toBeVisible();
  });

  it('render CommentsContent and send with no input', () => {
    vi.mock('@common');
    vi.mocked(useGetSegmentComments).mockReturnValue({
      data: [{ id: 1, message: '', cover: '', time: '', user: { display_name: '', id: 1 } }],
    } as UseQueryResult<GetSegmentCommentsResponse, unknown>);
    vi.mocked(useCreateComment).mockReturnValue({
      mutate: vi.fn(),
    } as unknown as UseMutationResult<void, any, any>);
    vi.mocked(useCheckAccess).mockReturnValue(() => true);
    vi.mocked(useHasAccess).mockReturnValue(true);

    const { getByText } = render(
      <TestProvider>
        <CommentsContent />
      </TestProvider>,
    );

    fireEvent.click(getByText('Send'));

    expect(getByText('Send')).toBeVisible();
  });
});
