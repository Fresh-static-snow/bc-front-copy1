import { memo } from 'react';

import { IconCheckSvg } from '@/shared/assets';
import { SelectableValue } from '@/shared/types/values.types';

import * as S from './ButtonList.styles';
import { ButtonListProps } from './ButtonList.types';

export const ButtonList: React.FC<ButtonListProps> = memo(
  ({ width, buttonList, activeButton, onChangeActiveButton }) => {
    const onClickButton = (buttonValue: SelectableValue) => () => {
      onChangeActiveButton(buttonValue);
    };

    return (
      <S.Root $width={width}>
        {buttonList?.map((item) => (
          <S.Button key={item.value} onClick={onClickButton(item)}>
            <S.Icon>{activeButton.value === item.value && <IconCheckSvg />}</S.Icon>

            <S.Label>{item.label}</S.Label>
          </S.Button>
        ))}
      </S.Root>
    );
  },
);
