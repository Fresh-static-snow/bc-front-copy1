export type FormFieldProps = {
  children: React.ReactNode;
  label: string;
  direction: 'row' | 'column';
  required?: boolean;
};

export type StyledRootProps = {
  $direction?: 'row' | 'column';
};

export type StyledLabelProps = {
  $direction?: 'row' | 'column';
};

export type StyledFieldProps = {
  $direction?: 'row' | 'column';
};
