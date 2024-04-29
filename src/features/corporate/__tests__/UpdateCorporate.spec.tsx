import { faker } from '@faker-js/faker';
import { fireEvent, render, waitFor } from '@testing-library/react';
import dayjs from 'dayjs';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeAll, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { UpdateCorporate } from '../ui/UpdateCorporate/UpdateCorporate';

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

vi.mock('@/entities/corporate', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/corporate')>(
    '@/entities/corporate',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/corporate')> = {
    ...actualModule,
    useGetCorporateForm: () => ({
      isFetching: false,
      isSuccess: true,
      data: {
        main_participants: [{}],
        company: {},
        start_date: dayjs().date(),
        cover: { url: '' },
        participants: [
          {
            avatar: { url: 'url' },
            display_name: 'display_name',
            first_name: 'first_name',
            id: 1,
            last_name: 'last_name',
            nick: 'nick',
            user_disciplines: [{ id: 1, title: 'title' }],
          },
        ],
        comments_count: 1,
        visible: true,
      },
    }),
  };

  return mockedModule;
});

vi.mock('@/entities/user', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/user')>('@/entities/user');
  const mockedModule: DeepPartial<typeof import('@/entities/user')> = {
    ...actualModule,
    useGetParticipantCascadingOptions: () => ({
      isLoading: false,
      isFetching: false,
      isSuccess: true,
      data: [
        {
          label: 'Lorem',
          value: 'Lorem',
          children: [{ label: 'Lorem', value: 'Lorem', parents: ['Lorem'], additional: '2' }],
        },
      ],
    }),
  };

  return mockedModule;
});

describe('features/corporate/UpdateCorporate', () => {
  beforeAll(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.clearAllMocks();
    vi.clearAllTimers();
    vi.resetModules();
  });

  it('render UpdateCorporate', async () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateCorporate
          requestType={{ label: 'Lorem', value: 'Lorem', additional: '1', status: false }}
          setEntityModal={vi.fn()}
        />
      </TestProvider>,
    );

    const imageUrl = faker.image.url({ width: 200, height: 200 });
    const imageFile = await fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const mockFile = new File([blob], 'test.png', { type: 'image/png' });
        return mockFile;
      });

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    fireEvent.input(getByTestId('PrimaryInput-location'), { target: { value: 'Artem' } });
    await waitFor(() =>
      fireEvent.change(getByTestId('PrimaryDropzone-cover'), {
        target: { files: [imageFile] },
      }),
    );
    fireEvent.click(getByTestId('DatePickerInput'));
    // GIVES INFINITY TEST BUG
    // fireEvent.click(getByTestId('DatePickerInput-input'));

    // expect(getByText('Today')).toBeVisible();

    // fireEvent.click(getByText('Today'));
    // fireEvent.click(getByTestId('TimePickerInput-input'));
    // const buttons = await findAllByText('00:30');
    // fireEvent.click(buttons[0]);

    expect(getByText('Update')).toBeVisible();

    fireEvent.click(getByText('Update'));
  });
});
