import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { FormField } from '../FormField/FormField';

describe('ui/FormField', () => {
  test('render FormField', () => {
    const { getByText } = render(
      <TestProvider>
        <FormField direction="column" label="Language" required>
          <button onClick={vi.fn()} type="button">
            click
          </button>
        </FormField>
      </TestProvider>,
    );

    expect(getByText('Language')).toBeVisible();
  });
});
