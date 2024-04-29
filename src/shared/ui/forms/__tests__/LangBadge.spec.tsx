import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { LangBadge } from '..';

describe('ui/LangBadge', () => {
  test('render LangBadge', () => {
    const { getByText } = render(
      <TestProvider>
        <LangBadge option={{ additional: 'Lorem', label: '', value: '' }} />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
