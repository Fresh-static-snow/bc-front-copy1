import { Fragment } from 'react';

import * as S from './Guests.styles';
import { GuestsProps } from './Guests.types';

export const Guests: React.FC<GuestsProps> = ({ guests }) => (
  <S.Guests>
    {guests?.map(({ id, social, name, username }) => (
      <S.GuestItem key={id}>
        <div>
          <S.Username>{username}</S.Username> <S.Name>{name}</S.Name>
        </div>
        <div>
          <S.Social>{social}</S.Social>
        </div>
      </S.GuestItem>
    ))}
  </S.Guests>
);
