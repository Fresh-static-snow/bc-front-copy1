import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { InfoTipLayout } from '..';

describe('modules/ScheduleParts/ui/InfoTipLayout', () => {
  it('render InfoTipLayout', () => {
    const { getByText } = render(
      <TestProvider>
        <InfoTipLayout InfoTipContent={<div>Lorem</div>} color="#fff" isVisible disabled>
          <div>Dolor</div>
        </InfoTipLayout>
      </TestProvider>,
    );

    expect(getByText('Dolor')).toBeVisible();
  });
});
