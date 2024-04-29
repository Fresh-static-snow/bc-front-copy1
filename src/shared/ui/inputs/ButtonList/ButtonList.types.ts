import { CSSSize } from '@/shared/types/styles.types';
import { SelectableValue } from '@/shared/types/values.types';

export type ButtonListProps = {
  width?: CSSSize;
  buttonList: SelectableValue[];
  activeButton: SelectableValue;
  onChangeActiveButton: (newValue: SelectableValue) => void;
};

export type StyledRootProps = {
  $width: CSSSize;
};
