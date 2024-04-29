import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { CollapsibleFormHeader } from '..';

describe('ui/CollapsibleFormHeader', () => {
  it('render CollapsibleFormHeader', () => {
    const { getByText } = render(
      <TestProvider>
        <CollapsibleFormHeader {...mock({ title: 'Lorem' })} subtitle="Ipsum" />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
    expect(getByText('Ipsum')).toBeVisible();
  });

  it('render CollapsibleFormHeader with extendedStatus', () => {
    const { getByText } = render(
      <TestProvider>
        <CollapsibleFormHeader {...mock({ title: 'Lorem' })} subtitle="Ipsum" extendedStatus />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
    expect(getByText('Ipsum')).toBeVisible();
  });
});
