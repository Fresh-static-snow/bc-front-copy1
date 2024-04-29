import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { DropDownChevron } from '..';

describe('ui/DropDownChevron', () => {
  test('render DropDownChevron', () => {
    const dropDownChevronScreen = render(
      <TestProvider>
        <DropDownChevron />
      </TestProvider>,
    );

    fireEvent.click(dropDownChevronScreen.getByTestId('DropDownChevron'));

    expect(dropDownChevronScreen.getByTestId('DropDownChevron')).toBeVisible();
  });

  test('render DropDownChevron with props', () => {
    const dropDownChevronScreen = render(
      <TestProvider>
        <DropDownChevron size="2px" active />
      </TestProvider>,
    );

    fireEvent.click(dropDownChevronScreen.getByTestId('DropDownChevron'));

    expect(dropDownChevronScreen.getByTestId('DropDownChevron')).toBeVisible();
  });
});
