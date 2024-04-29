import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { ButtonList } from '..';

describe('ui/ButtonList', () => {
  it('render ButtonList', () => {
    const oneButton = { label: 'Lorem ipsum', value: '1' };
    const buttonListScreen = render(
      <TestProvider>
        <ButtonList
          buttonList={[oneButton]}
          activeButton={oneButton}
          onChangeActiveButton={vi.fn()}
        />
      </TestProvider>,
    );

    fireEvent.click(buttonListScreen.getByText(oneButton.label));

    expect(buttonListScreen.getByText(oneButton.label)).toBeVisible();
  });
});
