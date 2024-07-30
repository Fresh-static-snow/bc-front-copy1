import { CSSProperties } from 'react';

import { SelectableValue } from '@/shared/types/values.types';

export type ButtonListProps = {
  width?: CSSProperties['height'];
  buttonList: SelectableValue[];
  activeButton: SelectableValue;
  onChangeActiveButton: (newValue: SelectableValue) => void;
};

export type StyledRootProps = {
  $width: CSSProperties['height'];
};
