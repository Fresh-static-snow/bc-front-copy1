import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { FormListTitle } from '..';

describe('ui/FormListTitle', () => {
  test('render FormListTitle', () => {
    const { getByText } = render(
      <TestProvider>
        <FormListTitle title="Lorem" />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
