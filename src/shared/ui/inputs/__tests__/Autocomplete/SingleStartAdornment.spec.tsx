import { render } from '@testing-library/react';
import { FC } from 'react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { AdditionalElementProps } from '../../Autocomplete/types';
import { SingleStartAdornment } from '../../Autocomplete/ui/SingleStartAdornment/SingleStartAdornment';

describe('ui/SingleStartAdornment', () => {
  test('render Autocomplete SingleStartAdornment', () => {
    const MockComponent: FC<AdditionalElementProps> = ({ option }) => <div>{option.label}</div>;

    const { getByText } = render(
      <TestProvider>
        <SingleStartAdornment
          AdditionalElement={MockComponent}
          option={{ label: 'Lorem', value: 'Lorem' }}
        />
      </TestProvider>,
    );

    expect(getByText('Lorem')).toBeVisible();
  });
});
