import { fireEvent, render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Accordion } from '..';

describe('ui/Accordion', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render Accordion collapsed and click', () => {
    const SummaryText = 'Lorem ipsum';
    const ContentText = 'Lorem ipsum dolor';

    const { getByText, queryByText } = render(
      <TestProvider>
        <Accordion withoutBorder summaryLabel={SummaryText}>
          {ContentText}
        </Accordion>
      </TestProvider>,
    );

    expect(getByText(SummaryText)).toBeVisible();
    expect(queryByText(ContentText)).toBeNull();

    fireEvent.click(getByText(SummaryText));

    expect(getByText(ContentText)).toBeVisible();
  });

  test('render Accordion with props', () => {
    const SummaryText = 'Lorem ipsum';
    const ContentText = 'Lorem ipsum dolor';

    const { getByText } = render(
      <TestProvider>
        <Accordion hoverable reversed defaultExpandedStatus summaryLabel={SummaryText}>
          {ContentText}
        </Accordion>
      </TestProvider>,
    );

    expect(getByText(SummaryText)).toBeVisible();
    expect(getByText(ContentText)).toBeVisible();
  });
});
