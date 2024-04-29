import { useTheme } from '@emotion/react';
import { memo, useCallback, useMemo } from 'react';

import { InfoTipLayout } from '@/shared/ui/layouts';

import { CorporateInfo } from '../CorporateInfo/CorporateInfo';
import { PeopleInfo } from '../PeopleInfo/PeopleInfo';
import { Time } from '../Time/Time';
import { TournamentTitle } from '../TournamentTitle/TournamentTitle';
import { UsersCategoriesInfoTipContent } from '../UsersCategoriesInfoTipContent/UsersCategoriesInfoTipContent';
import * as S from './CorporateItem.styles';
import { CorporateItemProps } from './CorporateItem.types';

export const CorporateItem: React.FC<CorporateItemProps> = memo(
  ({ corporate, onClickCorporate }) => {
    const theme = useTheme();
    const color = useMemo(
      () => corporate.ui_template?.primary || theme.appColors.palette_01,
      [corporate.ui_template?.primary, theme.appColors.palette_01],
    );

    const users = useMemo(() => {
      const mainParticipants =
        corporate.main_participants?.length > 0
          ? {
              category: 'Main participants',
              people: corporate.main_participants,
            }
          : null;

      return [mainParticipants];
    }, [corporate.main_participants]);

    const onClickCorporateTitle = useCallback(() => {
      if (onClickCorporate) {
        onClickCorporate(corporate);
      }
    }, [corporate, onClickCorporate]);

    return (
      <S.Root>
        <TournamentTitle
          title={corporate.name}
          color={color}
          isVisible={corporate.visible}
          onClickTournament={onClickCorporate ? onClickCorporateTitle : null}
        />

        <S.CorporateInfoWrapper>
          <Time color={color} startTime={corporate.start_time} endTime={corporate.end_time} />

          <CorporateInfo
            color={color}
            location={corporate.location}
            isVisible={corporate.visible}
          />
        </S.CorporateInfoWrapper>

        <InfoTipLayout
          InfoTipContent={<UsersCategoriesInfoTipContent color={color} users={users} />}
          color={color}
          isVisible={corporate.visible}
          disabled={!(users?.[0] || users?.[1])}
        >
          <div>
            <PeopleInfo
              color={color}
              isVisible={corporate.visible}
              rows
              mainPeople={corporate.main_participants}
            />
          </div>
        </InfoTipLayout>
      </S.Root>
    );
  },
);
