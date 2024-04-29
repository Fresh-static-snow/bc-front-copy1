import { Fragment } from 'react';

import { Avatar } from '@/shared/ui/data-display';
import { MarkedText } from '@/shared/ui/typography';

import * as S from './UsersCategoriesInfoTipContent.styles';
import { UsersCategoriesInfoTipContentProps } from './UsersCategoriesInfoTipContent.types';

export const UsersCategoriesInfoTipContent: React.FC<UsersCategoriesInfoTipContentProps> = ({
  color,
  users,
}) => (
  <S.Root>
    {users?.map((categoryData, index) => (
      <Fragment key={categoryData?.category ?? index}>
        {categoryData && (
          <S.Category>
            <S.CategoryTitle>{categoryData.category}</S.CategoryTitle>

            <S.CategoryList>
              {categoryData.people?.map((user) => (
                <S.CategoryItem key={user.id}>
                  <Avatar
                    image={user?.avatar?.url}
                    size="26px"
                    name={user.display_name}
                    backgroundColor={color}
                  />

                  {categoryData?.filter?.includes(String(user.id)) ? (
                    <MarkedText>
                      <S.Bold>{user?.nick}</S.Bold> {user?.first_name} {user?.last_name}{' '}
                    </MarkedText>
                  ) : (
                    <span>
                      <S.Bold>{user?.nick}</S.Bold> {user?.first_name} {user?.last_name}
                    </span>
                  )}

                  {user?.additionalText && (
                    <S.CategoryStatus>{` ${user?.additionalText}`}</S.CategoryStatus>
                  )}
                </S.CategoryItem>
              ))}
            </S.CategoryList>
          </S.Category>
        )}
      </Fragment>
    ))}
  </S.Root>
);
