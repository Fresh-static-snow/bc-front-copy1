import { faker } from '@faker-js/faker';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { User } from '@/shared/types/entities.types';

import { CropUserAvatar } from '../ui/CropUserAvatar/CropUserAvatar';

vi.mock('@/shared/lib', async () => {
  const actualModule = await vi.importActual<typeof import('@/shared/lib')>('@/shared/lib');
  const mockedModule: DeepPartial<typeof import('@/shared/lib')> = {
    ...actualModule,
    useCheckAccess: () => () => true,
  };

  return mockedModule;
});
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
vi.mock('@/entities/user', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/user')>('@/entities/user');
  const mockedModule: DeepPartial<typeof import('@/entities/user')> = {
    ...actualModule,
    useGetAuthenticatedUser: () => ({
      data: { avatar: {}, id: 1, email: '' } as User,
    }),
  };

  return mockedModule;
});

describe('features/user/CropUserAvatar', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CropUserAvatar', async () => {
    const { getByText, getByTestId, queryByText } = render(
      <TestProvider>
        <CropUserAvatar />
      </TestProvider>,
    );
    expect(getByText('Edit')).toBeVisible();
    fireEvent.click(getByText('Edit'));
    expect(getByTestId('Avatar')).toBeVisible();
    expect(getByTestId('File-input')).toBeInTheDocument();
    fireEvent.click(getByTestId('File-input'));

    const imageUrl = faker.image.url({ height: 200, width: 200 });
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
    expect(getByText('Cancel')).toBeVisible();
    fireEvent.click(getByText('Cancel'));
    expect(queryByText('Cancel')).not.toBeVisible();
  });
});
