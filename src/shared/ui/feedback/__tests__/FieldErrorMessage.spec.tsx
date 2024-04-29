import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { FieldErrorMessage } from '..';

describe('ui/FieldErrorMessage', () => {
  test('render FieldErrorMessage', () => {
    const errorText = 'Lorem ipsum';
    const dropDownChevronScreen = render(
      <TestProvider>
        <FieldErrorMessage position="absolute" errorMessage={errorText} />
      </TestProvider>,
    );

    expect(dropDownChevronScreen.getByText(errorText)).toBeVisible();
  });
});
