import { memo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IconChevronLeftSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs/PrimaryButton/PrimaryButton';

import * as S from './SubMenu.styles';
import { LocationState, SubMenuProps } from './SubMenu.types';

export const SubMenu: React.FC<SubMenuProps> = memo(
  ({
    title,
    backButtonLabel,
    backButtonLink,
    backgroundColor,
    color,
    buttonPadding,
    backButtonPrimaryLabel = 'Back to',
    borderNone = false,
    AdditionalComponent,
    CustomBackButton,
  }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const onClickBack = useCallback(() => {
      const state = location.state as LocationState;
      if (state) {
        navigate(state?.prevPath);
      } else {
        navigate(backButtonLink);
      }
    }, [backButtonLink, location.state, navigate]);

    return (
      <S.Root $backgroundColor={backgroundColor} $borderNone={borderNone}>
        <S.SectionWrapper $flexPosition="flex-start">
          {CustomBackButton ?? (
            <PrimaryButton
              padding={buttonPadding}
              label={backButtonPrimaryLabel}
              variant="secondary"
              IconComponent={IconChevronLeftSvg}
              AdditionalComponent={
                backButtonLabel ? (
                  <S.BackButtonAdditional>{backButtonLabel}</S.BackButtonAdditional>
                ) : null
              }
              onClick={onClickBack}
            />
          )}
        </S.SectionWrapper>

        <S.SectionWrapper $flexPosition="center">
          <S.EventTitle color={color}>{title}</S.EventTitle>
        </S.SectionWrapper>

        <S.SectionWrapper $flexPosition="flex-end">{AdditionalComponent}</S.SectionWrapper>
      </S.Root>
    );
  },
);
