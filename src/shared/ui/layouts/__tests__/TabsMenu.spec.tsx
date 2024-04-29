import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { TabsMenu } from '../TabsMenu/TabsMenu';

describe('TabsMenu', () => {
  const tabs = [
    { label: 'Tab 1', value: 'Tab 1' },
    { label: 'Tab 2', value: 'Tab 2' },
    { label: 'Tab 3', value: 'Tab 3' },
    { label: 'Tab 4', value: 'Tab 4' },
  ];
  const activeTab = { label: 'Tab 1', value: 'Tab 1' };
  const onChangeTab = jest.fn();

  it('render the TabsMenu component', () => {
    const { getByText } = render(
      <TestProvider>
        <TabsMenu tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />,
      </TestProvider>,
    );

    expect(getByText('Tab 1')).toBeVisible();
    expect(getByText('Tab 2')).toBeVisible();
    expect(getByText('Tab 3')).toBeVisible();
    expect(getByText('Tab 4')).toBeVisible();
  });
});
