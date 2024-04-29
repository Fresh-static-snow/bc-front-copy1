import { faker } from '@faker-js/faker';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useGetAuthenticatedUser, useUpdateUser, useUpdateUserAvatar } from '@/entities/user';

import { UserInfo } from '../../ui/Account/ui/UserContent/ui/UserInfo/UserInfo';

describe('pages/desktop/Account/UserInfo', () => {
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
    vi.clearAllMocks();
  });

  it('render Account UserInfo', async () => {
    vi.mock('@/entities/user');
    vi.mocked(useUpdateUser).mockReturnValue({
      isLoading: false,
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);

    vi.mocked(useUpdateUserAvatar).mockReturnValue({
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);

    vi.mocked(useGetAuthenticatedUser).mockReturnValue({
      data: {
        id: 0,
        company: undefined,
        confirmed: false,
        deactivated: false,
        email: '',
        display_name: '',
        first_name: '',
        last_name: '',
        nick: '',
        avatar: { url: '' },
        user_disciplines: [],
        roles: [],
        google_calendar: undefined,
      },
      isFetching: false,
      mutate: vi.fn(),
      mutateAsync: vi.fn(),
    } as any);

    const { getByText, getByTestId } = render(
      <TestProvider>
        <UserInfo />
      </TestProvider>,
    );

    expect(getByTestId('Avatar')).toBeVisible();

    fireEvent.click(getByTestId('Avatar'));

    expect(getByText('Edit')).toBeVisible();

    const imageUrl = faker.image.urlPicsumPhotos({ height: 200, width: 200 });

    const imageFile = await fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const mockFile = new File([blob], 'test.png', { type: 'image/png' });
        return mockFile;
      });

    await waitFor(() =>
      fireEvent.change(getByTestId('File-input'), {
        target: { files: [imageFile] },
      }),
    );

    expect(getByText('Update')).toBeVisible();

    // fireEvent.click(getByText('Update'));
    fireEvent.click(getByText('Cancel'));

    expect(getByText('Cancel')).not.toBeVisible();
  });
});
