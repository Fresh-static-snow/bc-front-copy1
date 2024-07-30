import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { UpdateSegment } from '../ui/UpdateSegment/UpdateSegment';

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

vi.mock('@/entities/event-segment', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/event-segment')>(
    '@/entities/event-segment',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/event-segment')> = {
    ...actualModule,
    useGetSegmentForm: () => ({
      isSuccess: true,
      isFetching: false,
    }),
  };

  return mockedModule;
});

describe('features/management/UpdateSegment', () => {
  beforeEach(() => {
    window.open = vi.fn();
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateSegment', () => {
    const { getByText, getByTestId, getAllByText } = render(
      <TestProvider>
        <UpdateSegment
          requestType={{ label: 'studio', value: 'studio' }}
          setEntityModal={vi.fn()}
        />
      </TestProvider>,
    );

    fireEvent.input(
      getByTestId('AutoCompleteInput-discipline').children[0].children[0].children[0],
      {
        target: { value: 'Lorem' },
      },
    );

    fireEvent.click(getByTestId('DatePickerInput'));
    fireEvent.click(getByTestId('DatePickerInput-input'));

    expect(getByText('Today')).toBeVisible();

    fireEvent.click(getByText('Today'));
    fireEvent.click(getByTestId('TimePickerInput-input'));
    const buttons = getAllByText('00:30');
    fireEvent.click(buttons[0]);
    expect(getByText('Update')).toBeVisible();
    fireEvent.click(getByText('Update'));
  });
});
