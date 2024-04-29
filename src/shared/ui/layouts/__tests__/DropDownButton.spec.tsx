import { fireEvent, render, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { DropDownButton } from '..';

describe('ui/DropDownButton', () => {
  it('render DropDownButton', () => {
    const {
      result: { current },
    } = renderHook(() => useState<HTMLButtonElement>(null));
    const onClose = vi.fn();
    const onChangeAnchor = vi.fn();
    const buttonText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <DropDownButton
          ButtonComponent={
            <button type="button" onClick={onChangeAnchor}>
              {buttonText}
            </button>
          }
          ContentComponent={<div style={{ width: '300px', padding: '20px' }}>Content</div>}
          isOpen={!!current[0]}
          anchorEl={current[0]}
          onClose={onClose}
        />
      </TestProvider>,
    );

    fireEvent.click(getByText(buttonText));

    expect(onChangeAnchor).toBeCalled();
    expect(getByText(buttonText)).toBeVisible();
  });

  it('render open DropDownButton', () => {
    const {
      result: { current },
    } = renderHook(() => useState<HTMLButtonElement | null>(null));
    const onClose = vi.fn();
    const onChangeAnchor = vi.fn();
    const buttonText = 'Lorem ipsum';

    const { getByText } = render(
      <TestProvider>
        <DropDownButton
          ButtonComponent={
            <button type="button" onClick={onChangeAnchor}>
              {buttonText}
            </button>
          }
          ContentComponent={<div style={{ width: '300px', padding: '20px' }}>Content</div>}
          isOpen
          anchorEl={current[0]}
          onClose={onClose}
        />
      </TestProvider>,
    );

    expect(getByText('Content')).toBeVisible();
  });
});
