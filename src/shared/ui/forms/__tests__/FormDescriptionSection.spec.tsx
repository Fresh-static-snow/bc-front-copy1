import { render, renderHook } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { FormDescriptionSection } from '..';

describe('ui/FormDescriptionSection', () => {
  test('render FormDescriptionSection', () => {
    const {
      result: {
        current: { control },
      },
    } = renderHook(() => useForm());

    const { getByText, getByTestId } = render(
      <TestProvider>
        <FormDescriptionSection.Section control={control} name="test" title="Test" />
      </TestProvider>,
    );

    expect(getByText('Test')).toBeInTheDocument();
    expect(getByTestId('add-section-button')).toBeInTheDocument();
  });
});
