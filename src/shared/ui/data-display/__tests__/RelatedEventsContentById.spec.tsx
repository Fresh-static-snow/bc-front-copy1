import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { RelatedEventsContentById } from '..';

describe('ui/RelatedEventsContentById', () => {
  it('render RelatedEventsContentById', () => {
    const { getByText } = render(
      <TestProvider>
        <RelatedEventsContentById
          {...mock({})}
          title="Lorem"
          entityId={0}
          data={[
            { id: 0, name: 'Lorem', events_count: 1, related_events: [{ id: 1, title: 'Ipsum' }] },
          ]}
        />
      </TestProvider>,
    );

    expect(getByText('Ipsum')).toBeVisible();
  });

  it('render RelatedEventsContentById without items', () => {
    const { getByText } = render(
      <TestProvider>
        <RelatedEventsContentById {...mock({})} />
      </TestProvider>,
    );

    expect(getByText('No related events')).toBeVisible();
  });

  it('render RelatedEventsContentById without back message', () => {
    const { queryByText } = render(
      <TestProvider>
        <RelatedEventsContentById {...mock({})} withoutBackMessage />
      </TestProvider>,
    );

    expect(queryByText('No related events')).toBeNull();
  });
});
