import { fireEvent, render } from '@testing-library/react';
import dayjs from 'dayjs';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { DatePicker } from '../..';

describe('ui/DatePicker.Year', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  test('render YearPicker', () => {
    const onChangeActiveDate = vi.fn();
    const { getByText, getByTestId, getAllByText } = render(
      <TestProvider>
        <DatePicker.Year activeDate={dayjs()} onChangeActiveDate={onChangeActiveDate} />
      </TestProvider>,
    );

    fireEvent.click(getByText('Today'));
    fireEvent.click(getByTestId('onClickBack'));
    fireEvent.click(getByTestId('onClickForward'));
    fireEvent.click(getAllByText('2024')[0]);
    expect(getAllByText('2024')[0]).toBeVisible();
  });
});
