import { render } from '@testing-library/react';
import { FC } from 'react';
import { describe, expect, test } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { AdditionalElementProps } from '../../Autocomplete/types';
import { CustomChip } from '../../Autocomplete/ui/CustomChip/CustomChip';

describe('ui/CustomChip', () => {
  test('render CustomChip', () => {
    const { getAllByText } = render(
      <TestProvider>
        <CustomChip
          AdditionalElement={undefined}
          option={{
            label: 'Lorem',
            value: 'Lorem',
            parents: ['text'],
            props: mock(),
          }}
        />
      </TestProvider>,
    );

    expect(getAllByText('Lorem')[0]).toBeVisible();
  });

  test('render AppPageParts CustomChip with AdditionalElement', () => {
    const MockComponent: FC<AdditionalElementProps> = ({ option }) => <div>{option.label}</div>;

    const { getAllByText } = render(
      <TestProvider>
        <CustomChip
          AdditionalElement={MockComponent}
          option={{
            label: 'Lorem',
            value: 'Lorem',
            parents: ['text'],
            props: mock(),
            additional: 'text',
          }}
        />
      </TestProvider>,
    );

    expect(getAllByText('Lorem')[0]).toBeVisible();
  });
});
