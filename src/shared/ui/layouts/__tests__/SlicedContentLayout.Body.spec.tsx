import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { SlicedContentLayout } from '..';

describe('ui/SlicedContentLayout.Body', () => {
  test('render SlicedContentLayout.Body', () => {
    const { getByText } = render(
      <TestProvider>
        <SlicedContentLayout.Body>Lorem</SlicedContentLayout.Body>
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
