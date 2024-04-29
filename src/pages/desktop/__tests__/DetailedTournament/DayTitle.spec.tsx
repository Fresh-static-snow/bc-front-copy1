import { render } from '@testing-library/react';
import dayjs from 'dayjs';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { DayTitle } from '../../ui/DetailedTournament/ui/ScheduleContent/ui/DayTitle/DayTitle';

describe('pages/desktop/DetailedTournament/DayTitle', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render DayTitle', () => {
    const { getByText } = render(
      <TestProvider>
        <DayTitle date={dayjs().toNow()} />
      </TestProvider>,
    );

    expect(getByText(dayjs(dayjs().toNow()).format('dddd, MMM DD'))).toBeVisible();
  });

  it('render DayTitle with no date', () => {
    const { getByText } = render(
      <TestProvider>
        <DayTitle date="" />
      </TestProvider>,
    );

    expect(getByText('Without Date')).toBeVisible();
  });
});
