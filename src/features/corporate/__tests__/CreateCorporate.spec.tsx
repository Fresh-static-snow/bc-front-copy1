import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock, mockDeep } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { CreateCorporate } from '../ui/CreateCorporate/CreateCorporate';

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

describe('features/corporate/CreateCorporate', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CreateCorporate', async () => {
    vi.mock('@/entities/corporate', async () => {
      const actualModule = await vi.importActual<typeof import('@/entities/corporate')>(
        '@/entities/corporate',
      );
      const mockedModule: DeepPartial<typeof import('@/entities/corporate')> = {
        ...actualModule,
        useCreateCorporate: () => mockDeep(),
      };
      return mockedModule;
    });

    const { getByText, getByTestId, findAllByText } = render(
      <TestProvider>
        <CreateCorporate setEntityModal={vi.fn()} />
      </TestProvider>,
    );

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    fireEvent.click(getByTestId('DatePickerInput'));
    fireEvent.click(getByTestId('DatePickerInput-input'));

    expect(getByText('Today')).toBeVisible();

    fireEvent.click(getByText('Today'));
    fireEvent.click(getByTestId('TimePickerInput-input'));
    const buttons = await findAllByText('00:30');
    fireEvent.click(buttons[0]);

    expect(getByText('Create')).toBeVisible();
    fireEvent.click(getByText('Create'));
  });
});
