import { RelatedEventList } from '../RelatedEventList/RelatedEventList';
import { RelatedEventsContentProps } from './RelatedEventsContent.types';

export const RelatedEventsContent: React.FC<RelatedEventsContentProps> = ({
  events_count,
  related_events,
}) => (
  <>
    {related_events?.length > 0 ? (
      <RelatedEventList
        title={`Participates in events (${events_count}):`}
        content={related_events}
      />
    ) : (
      <RelatedEventList title="No related events" />
    )}
  </>
);
