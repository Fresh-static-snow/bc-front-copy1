import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { CalendarLayout } from '../../DatePicker/ui/CalendarLayout/CalendarLayout';

describe('modules/DatePickers/elements/CalendarLayout', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  test('render CalendarLayout', () => {
    const onClickToday = vi.fn();
    const onClickBack = vi.fn();
    const onClickForward = vi.fn();

    const { getByText, getByTestId } = render(
      <TestProvider>
        <CalendarLayout
          title="Lorem"
          onClickToday={onClickToday}
          onClickBack={onClickBack}
          onClickForward={onClickForward}
        >
          <div>Ipsum</div>
        </CalendarLayout>
      </TestProvider>,
    );

    fireEvent.click(getByText('Today'));
    fireEvent.click(getByTestId('onClickBack'));
    fireEvent.click(getByTestId('onClickForward'));

    expect(onClickToday).toBeCalledTimes(1);
    expect(onClickBack).toBeCalledTimes(1);
    expect(onClickForward).toBeCalledTimes(1);
    expect(getByText('Today')).toBeVisible();
    expect(getByText('Ipsum')).toBeVisible();
    expect(getByText('Lorem')).toBeVisible();
  });
});
