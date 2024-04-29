export type SwitchProps = {
  checked: boolean;
  label?: string;
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
};

export type StyledLabelProps = {
  $disabled?: boolean;
};
