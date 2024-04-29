import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { ContentWrapper } from '../../ui/DetailedCorporate/ui/ContentWrapper/ContentWrapper';

describe('pages/desktop/DetailedCorporate/ContentWrapper', () => {
  it('render ContentWrapper', () => {
    const { getByText } = render(
      <TestProvider>
        <ContentWrapper>Lorem</ContentWrapper>
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
