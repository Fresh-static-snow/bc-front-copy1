import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { CascaderOption } from '../../Autocomplete/ui/CascaderOption/CascaderOption';

describe('ui/CascaderOption', () => {
  test('render AppPageParts CascaderOption', () => {
    const onChangeSubOptions = vi.fn();
    const { getAllByText } = render(
      <TestProvider>
        <CascaderOption
          AdditionalElement={undefined}
          selected
          props={{}}
          activeOptions={[{ label: 'Dolor', value: 'Dolor', parents: ['Dolor'] }]}
          onChangeSubOptions={onChangeSubOptions}
          option={{
            label: 'Lorem',
            value: 'Lorem',
            children: [{ label: 'Dolor', value: 'Dolor', parents: ['Dolor'] }],
          }}
        />
      </TestProvider>,
    );

    expect(getAllByText('Lorem')[0]).toBeVisible();
  });

  test('render AppPageParts CascaderOption with checkbox', () => {
    const onChangeSubOptions = vi.fn();
    const { getAllByText } = render(
      <TestProvider>
        <CascaderOption
          AdditionalElement={undefined}
          selected
          props={{}}
          activeOptions={[{ label: 'Lorem', value: 'Lorem', parents: ['Lorem'] }]}
          onChangeSubOptions={onChangeSubOptions}
          checkbox
          option={{
            label: 'Lorem',
            value: 'Lorem',
            children: [{ label: 'Dolor', value: 'Dolor', parents: ['Lorem'] }],
          }}
        />
      </TestProvider>,
    );

    expect(getAllByText('Lorem')[0]).toBeVisible();
  });
});
