import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';

import { ConfirmationModal } from '..';

describe('ui/ConfirmationModal', () => {
  it('render ConfirmationModal', () => {
    const onConfirm = vi.fn();
    const onClose = vi.fn();

    const { getByText } = render(
      <TestProvider>
        <ConfirmationModal
          isOpen
          onConfirm={onConfirm}
          onClose={onClose}
          icon
          title="title"
          message="message"
          additionalContent="additionalContent"
          isLoading
          confirmButtonLabel="confirmButtonLabel"
          additionalButtonLabel="additionalButtonLabel"
          closeButtonLabel="closeButtonLabel"
          withAdditionalButton
          maxWidth="200px"
        />
      </TestProvider>,
    );

    expect(getByText('confirmButtonLabel')).toBeInTheDocument();
  });

  it('render ConfirmationModal and confirm', () => {
    const onConfirm = vi.fn();
    const onClose = vi.fn();

    const { getByText } = render(
      <TestProvider>
        <ConfirmationModal
          isOpen
          onConfirm={onConfirm}
          onClose={onClose}
          icon
          title="title"
          message="message"
          additionalContent="additionalContent"
          confirmButtonLabel="confirmButtonLabel"
          additionalButtonLabel="additionalButtonLabel"
          closeButtonLabel="closeButtonLabel"
          withAdditionalButton
          maxWidth="200px"
        />
      </TestProvider>,
    );

    expect(getByText('confirmButtonLabel')).toBeInTheDocument();
    fireEvent.click(getByText('confirmButtonLabel'));
    expect(onConfirm).toBeCalled();
  });

  it('render ConfirmationModal and close', () => {
    const onConfirm = vi.fn();
    const onClose = vi.fn();

    const { getByText } = render(
      <TestProvider>
        <ConfirmationModal
          isOpen
          onConfirm={onConfirm}
          onClose={onClose}
          icon
          title="title"
          message="message"
          additionalContent="additionalContent"
          confirmButtonLabel="confirmButtonLabel"
          additionalButtonLabel="additionalButtonLabel"
          closeButtonLabel="closeButtonLabel"
          withAdditionalButton
          maxWidth="200px"
        />
      </TestProvider>,
    );

    expect(getByText('closeButtonLabel')).toBeInTheDocument();
    fireEvent.click(getByText('closeButtonLabel'));
    expect(onClose).toBeCalled();
  });
});
