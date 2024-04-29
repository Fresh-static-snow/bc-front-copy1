import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CalendarColumnTitle } from '../../DatePicker/ui/CalendarColumnTitle/CalendarColumnTitle';

describe('ui/CalendarColumnTitle', () => {
  test('render CalendarColumnTitle', () => {
    const { getByText } = render(
      <TestProvider>
        <CalendarColumnTitle day="Lorem" />
      </TestProvider>,
    );

    expect(getByText('Lorem'));
  });
});
