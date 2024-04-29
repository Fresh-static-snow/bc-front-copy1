import { fireEvent, render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CreateTeam } from '../ui/CreateTeam/CreateTeam';

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
    useGetGameDisciplineOptions: () => ({
      data: [{ label: 'Lorem', value: 'Lorem' }],
    }),
  };

  return mockedModule;
});

vi.mock('@/entities/team', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/team')>('@/entities/team');
  const mockedModule: DeepPartial<typeof import('@/entities/team')> = {
    ...actualModule,
    useCreateTeam: () => ({
      mutateAsync: vi.fn(),
      isLoading: false,
    }),
  };

  return mockedModule;
});

describe('features/team/CreateTeam', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CreateTeam', () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <CreateTeam setEntityModal={vi.fn()} />
      </TestProvider>,
    );

    fireEvent.input(
      getByTestId('AutoCompleteInput-discipline').children[0].children[0].children[0],
      { target: { value: 'Lorem' } },
    );
    fireEvent.click(getByText('Lorem'));
    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Dolor' } });

    expect(getByTestId('PrimaryInput-name')).toHaveValue('Dolor');
    expect(
      getByTestId('AutoCompleteInput-discipline').children[0].children[0].children[0],
    ).toHaveValue('Lorem');
    expect(getByText('Create')).toBeVisible();
    fireEvent.click(getByText('Create'));
  });
});
