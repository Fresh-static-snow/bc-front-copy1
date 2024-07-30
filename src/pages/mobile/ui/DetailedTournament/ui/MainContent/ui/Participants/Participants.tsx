import { ParticipantList } from '@/entities/user';
import { Accordion } from '@/shared/ui/data-display';

import * as S from './Participants.styles';
import { ParticipantsProps } from './Participants.types';

export const Participants: React.FC<ParticipantsProps> = ({ peopleTypes = [], count = 0 }) => (
  <S.Root id="participants">
    <S.ParticipantsTitle>Participants ({count})</S.ParticipantsTitle>

    {peopleTypes?.map(({ type, label }) =>
      type.length > 0 ? (
        <Accordion key={label} summaryLabel={label}>
          <ParticipantList participants={type} />
        </Accordion>
      ) : null,
    )}
  </S.Root>
);
