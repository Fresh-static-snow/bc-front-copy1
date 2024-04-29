import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { memo, useCallback, useMemo } from 'react';

import { BackgroundColor } from '@/shared/ui/data-display';
import { TextColor } from '@/shared/ui/typography';

import { UsersRow } from '../UsersRow/UsersRow';
import * as S from './CorporateRangeItem.styles';
import { CorporateRangeItemProps } from './CorporateRangeItem.types';

export const CorporateRangeItemMobile: React.FC<CorporateRangeItemProps> = memo(
  ({ periodLength, corporate, withParticipants, onClickCorporate }) => {
    const theme = useTheme();
    const color = useMemo(
      () => corporate.ui_template?.primary || theme.appColors.palette_01,
      [theme.appColors.palette_01, corporate.ui_template?.primary],
    );

    const onClickCorporateTitle = useCallback(() => {
      if (onClickCorporate) {
        onClickCorporate(corporate);
      }
    }, [onClickCorporate, corporate]);

    return (
      <S.CorporateWrapper $periodLength={periodLength || 1}>
        <S.Corporate
          onClick={onClickCorporate ? onClickCorporateTitle : () => {}}
          disabled={!onClickCorporate}
        >
          <BackgroundColor baseColor={color} colorIndicator stripes={!corporate.visible}>
            <S.CorporateContent>
              <TextColor
                secondaryColor={color}
                text={corporate.name}
                fontWeight="500"
                limitedWidth
              />

              <S.CorporateContentBottom>
                <TextColor
                  secondaryColor={color}
                  text={`${dayjs(corporate.start_date).format('DD MMM')}`}
                  fontSize="10px"
                  limitedWidth
                />

                <UsersRow
                  color={color}
                  mainParticipant={corporate.main_participants?.[0]}
                  withParticipants={withParticipants}
                />
              </S.CorporateContentBottom>
            </S.CorporateContent>
          </BackgroundColor>
        </S.Corporate>
      </S.CorporateWrapper>
    );
  },
);
