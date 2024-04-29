import { render } from '@testing-library/react';
import { FC } from 'react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { AdditionalElementProps } from '../../Autocomplete/types';
import { CustomOption } from '../../Autocomplete/ui/CustomOption/CustomOption';

describe('modules/Autocomplete/elements/CustomOption', () => {
  test('render AppPageParts CustomOption', () => {
    const MockComponent: FC<AdditionalElementProps> = ({ option }) => <div>{option.label}</div>;

    const { getAllByText } = render(
      <TestProvider>
        <CustomOption
          {...{
            option: { label: 'Lorem', value: 'Lorem' },
            selected: true,
            checkbox: true,
            props: {},
            AdditionalElement: MockComponent,
          }}
        />
      </TestProvider>,
    );

    expect(getAllByText('Lorem')[0]).toBeVisible();
  });

  test('render AppPageParts CustomOption with no checkbox', () => {
    const MockComponent: FC<AdditionalElementProps> = ({ option }) => <div>{option.label}</div>;

    const { getAllByText } = render(
      <TestProvider>
        <CustomOption
          {...{
            option: { label: 'Lorem', value: 'Lorem' },
            selected: true,
            props: {},
            AdditionalElement: MockComponent,
          }}
        />
      </TestProvider>,
    );

    expect(getAllByText('Lorem')[0]).toBeVisible();
  });
});
