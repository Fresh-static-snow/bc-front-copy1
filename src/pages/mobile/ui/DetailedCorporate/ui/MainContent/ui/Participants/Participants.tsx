import { ParticipantList } from '@/entities/user';
import { Accordion } from '@/shared/ui/data-display';

import * as S from './Participants.styles';
import { ParticipantsProps } from './Participants.types';

export const Participants: React.FC<ParticipantsProps> = ({
  mainParticipant = [],
  participants = [],
  participantsCount,
}) => (
  <S.Root id="participants">
    <S.ParticipantsTitle>Participants ({participantsCount})</S.ParticipantsTitle>

    {mainParticipant.length > 0 && (
      <Accordion summaryLabel="Main participant">
        <ParticipantList participants={mainParticipant} />
      </Accordion>
    )}

    {participants.length > 0 && (
      <Accordion summaryLabel="Participants">
        <ParticipantList participants={participants} />
      </Accordion>
    )}
  </S.Root>
);
