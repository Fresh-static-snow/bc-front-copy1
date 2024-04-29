import { fireEvent, render, renderHook } from '@testing-library/react';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { Modal } from '..';

describe('ui/Modal', () => {
  it('render Modal and open', () => {
    const { result } = renderHook((props) => useState(props), { initialProps: false });

    const onOpen = vi.fn(() => {
      result.current[1](true);
    });
    const onClose = vi.fn();
    const modalContent = 'Lorem ipsum';

    const { getByText, rerender } = render(
      <TestProvider>
        <button type="button" onClick={onOpen}>
          open
        </button>
        <Modal isOpen={result.current[0]} onClose={onClose} maxHeight="200px">
          {modalContent}
        </Modal>
      </TestProvider>,
    );

    fireEvent.click(getByText('open'));

    expect(onOpen).toBeCalled();

    rerender(
      <TestProvider>
        <button type="button" onClick={onOpen}>
          open
        </button>
        <Modal isOpen={result.current[0]} onClose={onClose} maxHeight="200px">
          {modalContent}
        </Modal>
      </TestProvider>,
    );
    expect(getByText(modalContent)).toBeInTheDocument();
  });
});
