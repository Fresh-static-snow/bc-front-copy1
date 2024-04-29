import { fireEvent, render } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { DatePicker } from '../..';

describe('ui/DatePicker.Week', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  test('render DatePicker.Week', () => {
    const onChangeActiveDate = vi.fn();
    const { getByText, getByTestId } = render(
      <TestProvider>
        <DatePicker.Week
          activeDate={[undefined, undefined]}
          onChangeActiveDate={onChangeActiveDate}
        />
      </TestProvider>,
    );

    fireEvent.click(getByText('Today'));
    fireEvent.click(getByTestId('onClickBack'));
    fireEvent.click(getByTestId('onClickForward'));
    fireEvent.click(getByText('21'));
    expect(getByText('21')).toBeVisible();
  });
});
