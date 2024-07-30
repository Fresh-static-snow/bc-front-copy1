import * as S from './EventInfo.styles';
import { EventInfoProps } from './EventInfo.types';

export const EventInfo: React.FC<EventInfoProps> = ({
  cover,
  name,
  time,
  date,
  logo,
  disciplineLogo,
  eventName,
}) => (
  <S.Root>
    {cover && (
      <S.Images>
        <S.Cover src={cover} alt="" />

        {logo && cover && (
          <S.LogoWrapper>
            <S.Logo src={logo} alt="" />
          </S.LogoWrapper>
        )}
      </S.Images>
    )}

    <S.General>
      {name && <S.Title>{name}</S.Title>}
      {(date || time) && (
        <S.Date>
          {date && <div>{time}</div>}
          {time && <div>{date}</div>}
        </S.Date>
      )}
    </S.General>

    <S.AdditionalWrapper>
      {eventName && <S.EventName>{eventName}</S.EventName>}
      {disciplineLogo && <S.DisciplineLogo src={disciplineLogo} alt="Discipline logo" />}
    </S.AdditionalWrapper>
  </S.Root>
);
