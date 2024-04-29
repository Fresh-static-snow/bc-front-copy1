export type CheckboxProps = {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  /**
   * @default 0
   */
  tabIndex?: number;
};

export type StyledLabelProps = {
  $disabled: boolean;
};
