import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { DatePicker } from '../..';

describe('ui/DatePicker.Quarter', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  test('render DatePicker.Quarter', () => {
    const onChangeActiveDate = vi.fn();
    const { getByText, getByTestId, getAllByText } = render(
      <TestProvider>
        <DatePicker.Quarter
          activeDate={[undefined, undefined]}
          onChangeActiveDate={onChangeActiveDate}
        />
      </TestProvider>,
    );

    fireEvent.click(getByText('Today'));
    fireEvent.click(getByTestId('onClickBack'));
    fireEvent.click(getByTestId('onClickForward'));
    fireEvent.click(getAllByText('Jan')[0]);
    expect(getAllByText('Jan')[0]).toBeVisible();
  });
});
