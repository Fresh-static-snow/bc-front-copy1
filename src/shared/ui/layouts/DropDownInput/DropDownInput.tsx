import { useCallback, useState } from 'react';

import * as S from './DropDownInput.styles';
import { DropDownInputProps } from './DropDownInput.types';

export const DropDownInput: React.FC<DropDownInputProps> = ({
  width,
  InputIcon,
  InputComponent,
  ContentComponent,
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  transformOrigin = { vertical: 'top', horizontal: 'left' },
  error,
  disabled,
}) => {
  // * The anchor is the element that the dropdown will be attached to.
  const [anchor, setAnchor] = useState<HTMLButtonElement>(null);

  const onChangeAnchor = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const onClearAnchor = useCallback(() => {
    setAnchor(null);
  }, []);

  return (
    <>
      <S.InputWrapper
        $width={width}
        $active={!!anchor}
        $error={error}
        onClick={onChangeAnchor}
        type="button"
        disabled={disabled}
      >
        {InputComponent}
        {InputIcon && <S.InputIconWrapper>{InputIcon}</S.InputIconWrapper>}
      </S.InputWrapper>

      <S.Popover
        open={!!anchor}
        anchorEl={anchor}
        onClose={onClearAnchor}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
      >
        {ContentComponent}
      </S.Popover>
    </>
  );
};

export default DropDownInput;
