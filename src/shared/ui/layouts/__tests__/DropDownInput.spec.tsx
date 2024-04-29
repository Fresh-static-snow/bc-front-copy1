import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { DropDownInput } from '..';

describe('ui/DropDownInput', () => {
  it('render DropDownInput', async () => {
    const inputText = 'Lorem ipsum';
    const buttonText = 'Lorem ipsum2';
    const user = userEvent.setup();
    const onClick = vi.fn();

    const { getByText } = render(
      <TestProvider>
        <button type="button" onClick={onClick} style={{ width: 500, height: 500 }}>
          {buttonText}
        </button>
        <div>
          <DropDownInput
            InputComponent={<div>{inputText}</div>}
            ContentComponent={<div style={{ width: '300px', padding: '20px' }}>Content</div>}
            InputIcon
          />
        </div>
      </TestProvider>,
    );

    await user.click(getByText(inputText));

    expect(getByText(inputText)).toBeVisible();
    expect(getByText('Content')).toBeVisible();

    await user.click(getByText(buttonText));

    expect(onClick).toBeCalled();
  });

  it('render DropDownInput with error', () => {
    const inputText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <DropDownInput
          InputComponent={<div>{inputText}</div>}
          ContentComponent={<div style={{ width: '300px', padding: '20px' }}>Content</div>}
          InputIcon
          error
        />
      </TestProvider>,
    );

    fireEvent.click(getByText(inputText));

    expect(getByText(inputText)).toBeVisible();
    expect(getByText('Content')).toBeVisible();
  });
});
