import { useTheme } from '@emotion/react';
import { memo, useCallback, useMemo, useState } from 'react';

import { BackgroundColor } from '@/shared/ui/data-display';
import { TextColor } from '@/shared/ui/typography';

import { InfoDrawer } from '../InfoDrawer/InfoDrawer';
import { PeopleInfoMobile } from '../PeopleInfo/PeopleInfo.mobile';
import { Time } from '../Time/Time';
import { TournamentTitleMobile } from '../TournamentTitle/TournamentTitle.mobile';
import * as S from './CorporateItem.styles';
import { CorporateItemMobileProps } from './CorporateItem.types';

export const CorporateItemMobile: React.FC<CorporateItemMobileProps> = memo(
  ({ discipline, corporate, onClickCorporate }) => {
    const theme = useTheme();
    const [isOpenInfoDrawer, setOpenInfoDrawer] = useState(false);

    const color = useMemo(
      () => corporate.ui_template?.primary || theme.appColors.palette_01,
      [corporate.ui_template?.primary, theme.appColors.palette_01],
    );

    const onChangeInfoDrawer = (status: boolean) => {
      setOpenInfoDrawer(status);
    };

    const onClickCorporateTitle = useCallback(() => {
      if (onClickCorporate) {
        onClickCorporate(corporate);
      }
    }, [corporate, onClickCorporate]);

    return (
      <>
        <InfoDrawer
          isOpen={isOpenInfoDrawer}
          setOpen={onChangeInfoDrawer}
          isVisible={corporate?.visible}
          color={color}
          discipline={discipline}
          eventName={corporate?.name}
          date={corporate?.start_date}
          time={`${corporate?.start_time ?? ''}${
            corporate?.end_time ? ` - ${corporate?.end_time}` : ''
          }`}
          location={corporate?.location}
          mainParticipant={corporate?.main_participants?.[0]}
        />

        <S.RootMobile>
          <S.LineMobile $color={color} />

          <BackgroundColor baseColor={color} stripes={false} borderRadius={false}>
            <TournamentTitleMobile
              title={corporate.name}
              color={color}
              isVisible={corporate.visible}
              onClickTournament={onClickCorporate ? onClickCorporateTitle : null}
            />
          </BackgroundColor>

          <BackgroundColor borderRadius={false} baseColor={color} stripes={!corporate.visible}>
            <S.CorporateInfoWrapperMobile onClick={() => onChangeInfoDrawer(true)}>
              <S.TimeWrapperMobile>
                <Time color={color} startTime={corporate.start_time} endTime={corporate.end_time} />
              </S.TimeWrapperMobile>

              <S.DetailsWrapperMobile>
                <S.TextWrapperMobile>
                  <TextColor text="Location" secondaryColor={color} />
                  <TextColor text={corporate.location} secondaryColor={color} fontWeight="600" />
                </S.TextWrapperMobile>

                <S.DetailWrapperMobile>
                  <PeopleInfoMobile
                    color={color}
                    isVisible={corporate.visible}
                    peopleList={corporate.main_participants}
                  />
                </S.DetailWrapperMobile>
              </S.DetailsWrapperMobile>
            </S.CorporateInfoWrapperMobile>
          </BackgroundColor>

          <BackgroundColor customStyles={{ height: 30 }} baseColor={color} borderRadius={false} />
        </S.RootMobile>
      </>
    );
  },
);
