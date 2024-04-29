import { faker } from '@faker-js/faker';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { UpdateGameDiscipline } from '../ui/UpdateGameDiscipline/UpdateGameDiscipline';

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

vi.mock('@/entities/game-discipline', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/game-discipline')>(
    '@/entities/game-discipline',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/game-discipline')> = {
    ...actualModule,
    useGetGameDisciplineForm: () => ({
      isSuccess: true,
      isFetching: false,
    }),
  };

  return mockedModule;
});

describe('features/game-discipline/UpdateGameDiscipline', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateGameDiscipline', async () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateGameDiscipline
          requestType={{ label: 'Lorem', value: 'Lorem', additional: '1' }}
          setEntityModal={vi.fn()}
        />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    expect(getByTestId('PrimaryInput-name')).toHaveValue('Artem');

    const imageUrl = faker.image.url();
    const imageFile = await fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const mockFile = new File([blob], 'test.png', { type: 'image/png' });
        return mockFile;
      });

    await waitFor(() =>
      fireEvent.change(getByTestId('PrimaryDropzone-logo'), {
        target: { files: [imageFile] },
      }),
    );

    expect(getByText('Update')).toBeVisible();
    fireEvent.click(getByText('Update'));
  });
});
