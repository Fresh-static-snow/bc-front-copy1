import { act, fireEvent, render, renderHook } from '@testing-library/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Autocomplete } from '../..';
import { AdditionalElementProps } from '../../Autocomplete/types';

describe('ui/Autocomplete.Cascader', () => {
  test('render Autocomplete.Cascader', () => {
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
        <Autocomplete.Cascader
          {...{
            name: 'test',
            AdditionalElement: MockComponent,
            withOptionCreation: true,
            disabled: false,
            disablePopupIconRotation: false,
            optionCheckbox: false,
            placeholder: 'placeholder',
            options: [
              {
                label: 'Lorem',
                value: 'Lorem',
                status: true,
                additional: 'Ipsum',
                // children: [{ label: 'Dolor', value: 'Dolor', parent: 'Lorem' }],
              },
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
      target: { value: 'Dolor' },
    });
    fireEvent.click(getAllByText('No options')[0]);
    expect(getAllByText('No options')[0]).toBeVisible();

    act(() => {
      setError('test', {
        message: 'error',
        type: 'maxLength',
      });
    });
    expect(getAllByText('error')[0]).toBeVisible();
  });

  test('render AutocompleteCascader with adding value', () => {
    const {
      result: {
        current: { control },
      },
    } = renderHook(() => useForm());
    const MockComponent: FC<AdditionalElementProps> = ({ option }) => (
      <div style={{ height: 25, width: 25 }}>{option.label}</div>
    );

    const { getByTestId, getAllByText } = render(
      <TestProvider>
        <Autocomplete.Cascader
          {...{
            name: 'test',
            AdditionalElement: MockComponent,
            withOptionCreation: true,
            disabled: false,
            disablePopupIconRotation: false,
            optionCheckbox: false,
            placeholder: 'placeholder',
            options: [
              {
                label: 'Lorem',
                value: 'Lorem',
                status: true,
                additional: 'Ipsum',
                // children: [{ label: 'Dolor', value: 'Dolor', parent: 'Lorem' }],
              },
              { label: 'Helen', value: 'Helen' },
            ],
            control,
          }}
        />
      </TestProvider>,
    );
    const input = getByTestId('AutoCompleteInput-test');
    const actualInput = input.children[0].children[0].children[0];

    fireEvent.focus(input);
    fireEvent.click(getByTestId('Rotate'));
    fireEvent.mouseDown(input.children[0].children[0].children[0]);
    fireEvent.change(input.children[0].children[0].children[0], {
      target: { value: 'Option 1' },
    });
    expect(getAllByText('No options')[0]).toBeVisible();
    fireEvent.click(getByTestId('Rotate'));
    fireEvent.focus(actualInput);
    fireEvent.keyDown(actualInput, {
      key: 'Delete',
      code: 'Delete',
      charCode: 46,
    });
  });
});
