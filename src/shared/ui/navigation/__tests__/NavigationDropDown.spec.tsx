import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { NavigationDropDown } from '..';

describe('ui/NavigationDropDown', () => {
  it('render NavigationDropDown', () => {
    const { getByText } = render(
      <TestProvider>
        <NavigationDropDown
          buttonInnerBorder
          buttonPadding="16px"
          buttonVariant="primary"
          ContentComponent={<div style={{ width: '300px', padding: '20px' }}>ContentComponent</div>}
          ButtonContentComponent={
            <div style={{ width: '300px', padding: '20px' }}>ButtonContentComponent</div>
          }
          activePathString="/"
        />
      </TestProvider>,
    );

    expect(getByText('ButtonContentComponent')).toBeVisible();

    fireEvent.click(getByText('ButtonContentComponent'));

    expect(getByText('ContentComponent')).toBeVisible();
  });
});
