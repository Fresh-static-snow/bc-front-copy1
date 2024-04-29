import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { DatePicker } from '../..';

describe('ui/DatePicker.Time', () => {
  test('render DatePicker.Time', () => {
    const onChangeActiveTime = vi.fn();
    const { getByText, getAllByText } = render(
      <TestProvider>
        <DatePicker.Time
          activeRange={[undefined, undefined]}
          onChangeActiveTime={onChangeActiveTime}
        />
      </TestProvider>,
    );

    fireEvent.click(getByText('Set range —', { exact: false }));
    fireEvent.click(getAllByText('00:30')[0]);
    fireEvent.click(getAllByText('00:30')[1]);
    expect(getAllByText('00:30')[0]).toBeVisible();
    expect(onChangeActiveTime).toBeCalled();
  });
});
