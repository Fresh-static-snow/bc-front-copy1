import { useTheme } from '@emotion/react';

import { Avatar } from '@/shared/ui/data-display';

import * as S from './ParticipantList.styles';
import { ParticipantListProps } from './ParticipantList.types';

export const ParticipantList: React.FC<ParticipantListProps> = ({ participants }) => {
  const theme = useTheme();

  return (
    <S.Root>
      {participants?.map(({ id, avatar, display_name }) => (
        <S.Participant key={id}>
          <Avatar
            image={avatar?.url}
            name={display_name}
            size="32px"
            backgroundColor={theme.appColors.primary_03}
            fontSize="13px"
          />

          <S.Name>{display_name}</S.Name>
        </S.Participant>
      ))}
    </S.Root>
  );
};
