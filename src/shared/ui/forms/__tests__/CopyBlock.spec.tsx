import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CopyBlock } from '../CopyBlock/CopyBlock';

describe('ui/CopyBlock', () => {
  it('render CopyBlock', () => {
    const { getByText } = render(
      <TestProvider>
        <CopyBlock title="Test Title" />
      </TestProvider>,
    );

    expect(getByText('Test Title')).toBeVisible();
    expect(getByText('Copy')).toBeVisible();
    expect(getByText('Paste')).toBeVisible();
  });
});
