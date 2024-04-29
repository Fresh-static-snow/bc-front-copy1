import { Avatar } from '@/shared/ui/data-display';
import { MarkedText } from '@/shared/ui/typography';

import * as S from './UsersInfoTipContent.styles';
import { UsersInfoTipContentProps } from './UsersInfoTipContent.types';

export const UsersInfoTipContent: React.FC<UsersInfoTipContentProps> = ({
  color,
  users,
  filterList = [],
}) => (
  <S.UsersInfoTipContent>
    <S.UserList>
      {users?.map((user) => (
        <S.UserItem key={user.id}>
          <Avatar
            image={user?.avatar?.url}
            size="26px"
            name={user.display_name}
            backgroundColor={color}
          />

          {filterList?.includes(String(user.id)) ? (
            <MarkedText>
              <S.Bold>{user?.nick}</S.Bold> {user?.first_name} {user?.last_name}
            </MarkedText>
          ) : (
            <span>
              <S.Bold>{user?.nick}</S.Bold> {user?.first_name} {user?.last_name}
            </span>
          )}
        </S.UserItem>
      ))}
    </S.UserList>
  </S.UsersInfoTipContent>
);
