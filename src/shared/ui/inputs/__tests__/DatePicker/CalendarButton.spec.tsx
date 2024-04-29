import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CalendarButton } from '../../DatePicker/ui/CalendarButton/CalendarButton';

describe('ui/CalendarButton', () => {
  test('render CalendarButton', () => {
    const onClick = vi.fn();
    const { getByText } = render(
      <TestProvider>
        <CalendarButton
          label="Lorem"
          isBig
          rangeType="in-range"
          isActiveDate
          isCurrentDate={false}
          isOtherPeriod={false}
          onClick={onClick}
        />
        <CalendarButton
          label="1"
          rangeType="neutral"
          onClick={onClick}
          isActiveDate={false}
          isCurrentDate
          isOtherPeriod={false}
        />
        <CalendarButton
          label="2"
          rangeType="range-end"
          onClick={onClick}
          isActiveDate={false}
          isCurrentDate={false}
          isOtherPeriod
        />
        <CalendarButton
          label="3"
          rangeType="range-start"
          onClick={onClick}
          isActiveDate={false}
          isCurrentDate={false}
          isOtherPeriod
        />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
    fireEvent.click(getByText('Lorem'));
    expect(onClick).toBeCalledTimes(1);
  });
});
