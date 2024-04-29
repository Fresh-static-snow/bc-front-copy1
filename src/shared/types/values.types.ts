export type ButtonType = 'submit' | 'reset' | 'button';

export type SelectableValue = {
  value: string;
  label: string;
};

export type TabValue = SelectableValue & {
  additional?: React.ReactNode;
};

export type PrimarySelectableValue = SelectableValue & {
  additional?: string;
  status?: boolean;
};

export type SelectableValueWithParent = PrimarySelectableValue & {
  parent: string;
};

export type SelectableValueWithChildren = PrimarySelectableValue & {
  children?: SelectableValueWithParent[];
};

export type CascaderSubValue = PrimarySelectableValue & {
  parents: string[];
};

export type CascaderPrimaryValue = PrimarySelectableValue & {
  children?: CascaderSubValue[];
};

export type CascaderMixedValue = CascaderPrimaryValue & CascaderSubValue;

export type Form = {
  isMobile?: boolean;
  requestType?: PrimarySelectableValue;
  setEntityModal: () => void;
};

export type FormTemplates = {
  [key: string]: React.FC<Form>;
};
