import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Tabs } from '..';

describe('ui/Tabs', () => {
  test('render Tabs', () => {
    const tabs = [
      { label: 'tab1', value: 'tab1Value' },
      { label: 'tab2', value: 'tab2Value' },
    ];
    const setActiveTab = vi.fn();
    const tabsScreen = render(
      <TestProvider>
        <Tabs setActiveTab={setActiveTab} tabList={tabs} activeTab={tabs[0]} />
      </TestProvider>,
    );

    fireEvent.click(tabsScreen.getByText(tabs[0].label));

    expect(setActiveTab).toBeCalled();
    expect(tabsScreen.getByText(tabs[0].label)).toBeVisible();
  });
});
