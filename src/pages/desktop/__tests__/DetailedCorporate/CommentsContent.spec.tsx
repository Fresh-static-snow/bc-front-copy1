import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { fireEvent, render } from '@testing-library/react';
import { AxiosError } from 'axios';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useCreateComment } from '@/entities/comment';
import { CreateCommentParams } from '@/entities/comment/api/comment.service.types';
import { useGetCorporateComments } from '@/entities/corporate';
import { GetTournamentCommentsResponse } from '@/entities/tournament/api/tournament.service.types';
import { useCheckAccess, useHasAccess } from '@/shared/lib';
import { AxiosErrorContent } from '@/shared/types/services.types';

import CommentsContent from '../../ui/DetailedCorporate/ui/CommentsContent/CommentsContent';

describe('pages/desktop/DetailedCorporate/CommentsContent', () => {
  vi.mock('@/entities/comment');
  vi.mock('@/entities/corporate');
  vi.mock('@/shared/lib');

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render Comments with no comments', () => {
    vi.mocked(useGetCorporateComments).mockReturnValue({
      data: [],
    } as never);
    vi.mocked(useCreateComment).mockReturnValue({
      mutate: vi.fn(),
    } as never);
    vi.mocked(useCheckAccess).mockReturnValue(() => true);
    vi.mocked(useHasAccess).mockReturnValue(true);

    const { getByText } = render(
      <TestProvider>
        <CommentsContent />
      </TestProvider>,
    );

    expect(getByText('Send')).toBeVisible();
  });

  it('render Comments', () => {
    vi.mocked(useGetCorporateComments).mockReturnValue({
      data: [{ id: 1, message: '', cover: '', time: '', user: { display_name: '', id: 1 } }],
    } as UseQueryResult<GetTournamentCommentsResponse, unknown>);
    vi.mocked(useCreateComment).mockReturnValue({
      mutate: vi.fn(),
    } as unknown as UseMutationResult<void, AxiosError<AxiosErrorContent, any>, CreateCommentParams, unknown>);
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

  it('render Comments and send with no input', () => {
    vi.mocked(useGetCorporateComments).mockReturnValue({
      data: [{ id: 1, message: '', cover: '', time: '', user: { display_name: '', id: 1 } }],
    } as UseQueryResult<GetTournamentCommentsResponse, unknown>);
    vi.mocked(useCreateComment).mockReturnValue({
      mutate: vi.fn(),
    } as any);
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
