import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { RelatedEventList } from '..';

describe('ui/RelatedEventList', () => {
  it('render RelatedEventList', () => {
    const { getByText } = render(
      <TestProvider>
        <RelatedEventList title="Lorem" content={[{ id: 1, title: 'Ipsum' }]} />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
    expect(getByText('Ipsum')).toBeVisible();
  });

  it('render RelatedEventList with 16 items', () => {
    const { getByText } = render(
      <TestProvider>
        <RelatedEventList
          title="Lorem"
          content={new Array(16)
            .fill({ id: 1, title: '' })
            .map(({ title }: { title: string }, i) => ({ id: i, title }))}
        />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });

  it('render RelatedEventList with short items', () => {
    const { getByText } = render(
      <TestProvider>
        <RelatedEventList title="Lorem" content="Ipsum" />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
    expect(getByText('Ipsum')).toBeVisible();
  });
});
