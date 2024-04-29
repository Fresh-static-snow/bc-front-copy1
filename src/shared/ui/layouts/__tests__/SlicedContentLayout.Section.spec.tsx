import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { SlicedContentLayout } from '..';

describe('ui/SlicedContentLayout.Section', () => {
  test('render SlicedContentLayout.Section', () => {
    const { getByText } = render(
      <TestProvider>
        <SlicedContentLayout.Section>Lorem</SlicedContentLayout.Section>
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
