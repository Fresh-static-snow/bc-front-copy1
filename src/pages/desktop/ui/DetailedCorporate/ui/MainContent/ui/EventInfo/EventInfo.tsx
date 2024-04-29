import * as S from './EventInfo.styles';
import { EventInfoProps } from './EventInfo.types';

export const EventInfo: React.FC<EventInfoProps> = ({ cover, name, location, date, logo }) => (
  <S.Root>
    {cover && <S.Cover src={cover} alt="" />}

    <S.General>
      {name && <S.Title>{name}</S.Title>}
      {location && <S.Location>{location}</S.Location>}
      {date && <S.Date>{date}</S.Date>}
    </S.General>

    <S.LogoWrapper>{logo && <S.Logo src={logo} alt="Discipline logo" />}</S.LogoWrapper>
  </S.Root>
);
