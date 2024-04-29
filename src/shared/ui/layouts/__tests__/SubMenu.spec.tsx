import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { SubMenu } from '..';
import { SubMenuProps } from '../SubMenu/SubMenu.types';

describe('ui/SubMenu', () => {
  test('render SubMenu', () => {
    const { getByText } = render(
      <TestProvider>
        <SubMenu {...mock<SubMenuProps>({ backButtonLabel: 'Lorem' })} />
      </TestProvider>,
    );
    expect(getByText('Back to')).toBeVisible();
    fireEvent.click(getByText('Back to'));
    expect(getByText('Lorem')).toBeVisible();
    fireEvent.click(getByText('Lorem'));
  });
});
