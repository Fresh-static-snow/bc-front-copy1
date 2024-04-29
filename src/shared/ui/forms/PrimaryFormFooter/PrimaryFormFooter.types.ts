import { Control, FieldValues } from 'react-hook-form';

export type PrimaryFormFooterProps = {
  control: Control<FieldValues>;
  disabledFields?: string[];
  hiddenFields?: string[];
  anotherOneCheckbox?: boolean;
  visibleSwitch?: boolean;
  withDelete?: boolean;
  checkBoxName?: string;
  switchName?: string;
  submitChecked: boolean;
  submitButtonLabel?: string;
  isLoading?: boolean;
  /**
   * Callback fired when the component requests to be closed.
   */
  onClose?: () => void;
  /**
   * Callback fired when clicking the `Delete` button.
   */
  onClickDelete?: () => void;
};
