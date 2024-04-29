import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { ContentWrapper } from '../../ui/Management/ui/ContentWrapper/ContentWrapper';

describe('pages/desktop/Management/ContentWrapper', () => {
  test('render ContentWrapper', () => {
    const { getByText } = render(
      <TestProvider>
        <ContentWrapper>Lorem</ContentWrapper>
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
