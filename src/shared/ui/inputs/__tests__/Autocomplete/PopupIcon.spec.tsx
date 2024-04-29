import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { PopupIcon } from '../../Autocomplete/ui/PopupIcon/PopupIcon';

describe('/ui/PopupIcon', () => {
  test('render Autocomplete PopupIcon', () => {
    const { getByTestId } = render(
      <TestProvider>
        <PopupIcon />
      </TestProvider>,
    );

    expect(getByTestId('PopupIcon-icon')).toBeVisible();
  });
});
