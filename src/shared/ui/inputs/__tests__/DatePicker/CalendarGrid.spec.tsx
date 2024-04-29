import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CalendarGrid } from '../../DatePicker/ui/CalendarGrid/CalendarGrid';

describe('ui/CalendarGrid', () => {
  it('render CalendarGrid', () => {
    const { getByText } = render(
      <TestProvider>
        <CalendarGrid columns={1}>Lorem</CalendarGrid>
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
