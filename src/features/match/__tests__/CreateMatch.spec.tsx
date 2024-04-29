import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { CreateMatch } from '../ui/CreateMatch/CreateMatch';

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

describe('features/management/CreateMatch', () => {
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

  it('render CreateMatch', () => {
    const { getByText, getByTestId, getAllByText } = render(
      <TestProvider>
        <CreateMatch setEntityModal={vi.fn()} />
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
    expect(getByText('Create')).toBeVisible();
    fireEvent.click(getByText('Create'));
  });
});
