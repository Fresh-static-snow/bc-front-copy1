import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { RelatedEventsContent } from '..';

describe('ui/RelatedEventsContent', () => {
  it('render RelatedEventsContent', () => {
    const { getByText } = render(
      <TestProvider>
        <RelatedEventsContent events_count={1} related_events={[{ id: 1, title: 'Lorem' }]} />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });

  it('render RelatedEventsContent without items', () => {
    const { getByText } = render(
      <TestProvider>
        <RelatedEventsContent events_count={0} related_events={[]} />
      </TestProvider>,
    );

    expect(getByText('No related events')).toBeVisible();
  });
});
