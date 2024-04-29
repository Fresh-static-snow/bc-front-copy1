import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CustomPopup } from '../../Autocomplete/ui/CustomPopup/CustomPopup';

describe('ui/CustomPopup', () => {
  test('render CustomPopup', () => {
    const { getByText } = render(
      <TestProvider>
        <CustomPopup open>Lorem</CustomPopup>
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
