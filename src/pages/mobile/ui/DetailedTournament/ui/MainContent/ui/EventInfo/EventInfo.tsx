import { useTheme } from '@emotion/react';
import { useEffect, useState } from 'react';

import { IconCircleInfoSvg, IconUsersSvg } from '@/shared/assets';
import { PrimaryButton } from '@/shared/ui/inputs';

import * as S from './EventInfo.styles';
import { EventInfoProps } from './EventInfo.types';

export const EventInfo: React.FC<EventInfoProps> = ({
  cover,
  name,
  region,
  date,
  logo,
  participantsCount,
}) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  const onClickAnchor = (targetId: string) => () => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const image = new Image();
    image.src = cover;
    image.onload = () => {
      setIsLoading(false);
    };
  }, [cover]);

  return (
    <S.Root>
      <S.CoverWrapper>
        {isLoading ? <S.CoverPlaceholder /> : <S.Cover src={cover} alt="" />}

        <S.AnchorsWrapper>
          <PrimaryButton
            IconComponent={IconCircleInfoSvg}
            onClick={onClickAnchor('description')}
            padding="2px"
            variant="custom"
            customStyles={{
              iconColor: theme.appColors.primary_05,
              backgroundColor: theme.appColors.palette_01,
            }}
          />

          <PrimaryButton
            IconComponent={IconUsersSvg}
            label={String(participantsCount)}
            onClick={onClickAnchor('participants')}
            padding="2px 4px"
            variant="custom"
            customStyles={{
              iconColor: theme.appColors.primary_05,
              color: theme.appColors.primary_05,
              backgroundColor: theme.appColors.palette_01,
            }}
          />
        </S.AnchorsWrapper>
      </S.CoverWrapper>

      <S.General>
        {name && <S.Title>{name}</S.Title>}

        <S.InnerWrapper>
          {region && <S.Region>{region}</S.Region>}

          <S.DateAndLogo>
            {date && <S.Date>{date}</S.Date>}
            <S.LogoWrapper>{logo && <S.Logo src={logo} alt="Discipline logo" />}</S.LogoWrapper>
          </S.DateAndLogo>
        </S.InnerWrapper>
      </S.General>
    </S.Root>
  );
};
