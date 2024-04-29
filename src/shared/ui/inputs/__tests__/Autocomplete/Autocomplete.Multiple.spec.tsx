import { act, fireEvent, render, renderHook } from '@testing-library/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Autocomplete } from '../../Autocomplete';
import { AdditionalElementProps } from '../../Autocomplete/types';

describe('ui/Autocomplete.Multiple', () => {
  test('render Autocomplete.Multiple', () => {
    const {
      result: {
        current: { control, setError },
      },
    } = renderHook(() => useForm());
    const MockComponent: FC<AdditionalElementProps> = ({ option }) => (
      <div style={{ height: 25, width: 25 }}>{option.label}</div>
    );

    const { getByTestId, getAllByText } = render(
      <TestProvider>
        <Autocomplete.Multiple
          {...{
            name: 'test',
            AdditionalElement: MockComponent,
            withOptionCreation: true,
            disabled: false,
            disablePopupIconRotation: false,
            optionCheckbox: false,
            placeholder: 'placeholder',
            options: [
              { label: 'Lorem', value: 'Lorem', status: true, additional: 'Ipsum' },
              { label: 'Dolor', value: 'Dolor' },
              { label: 'Helen', value: 'Helen' },
            ],
            control,
          }}
        />
      </TestProvider>,
    );

    fireEvent.focus(getByTestId('AutoCompleteInput-test'));
    fireEvent.click(getByTestId('Rotate'));
    fireEvent.mouseDown(getByTestId('AutoCompleteInput-test').children[0].children[0].children[0]);
    fireEvent.change(getByTestId('AutoCompleteInput-test').children[0].children[0].children[0], {
      target: { value: 'Helen' },
    });
    fireEvent.click(getAllByText('Helen')[0]);
    fireEvent.click(getByTestId('Rotate'));

    act(() => {
      setError('test', {
        message: 'error',
        type: 'maxLength',
      });
    });

    expect(getAllByText('Helen')[0]).toBeVisible();
  });
});
