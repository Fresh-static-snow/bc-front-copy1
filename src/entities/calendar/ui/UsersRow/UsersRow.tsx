import { memo } from 'react';

import { Avatar, AvatarList } from '@/shared/ui/data-display';
import { TextColor } from '@/shared/ui/typography';

import * as S from './UsersRow.styles';
import { UsersRowProps } from './UsersRow.types';

export const UsersRow: React.FC<UsersRowProps> = memo(
  ({ color, mainParticipant, participants, withParticipants = false }) => (
    <S.Root $gridColumns={withParticipants && participants?.length > 0}>
      <S.MainParticipant>
        {mainParticipant && (
          <>
            <Avatar
              name={mainParticipant.display_name}
              image={mainParticipant.avatar?.url}
              backgroundColor={color}
            />
            <TextColor secondaryColor={color} text={mainParticipant.display_name} limitedWidth />
          </>
        )}
      </S.MainParticipant>

      {withParticipants && participants?.length > 0 && (
        <AvatarList color={color} people={participants} position="right" />
      )}
    </S.Root>
  ),
);
