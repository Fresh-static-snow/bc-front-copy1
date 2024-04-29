import { useMemo } from 'react';

import { RelatedEventList } from '../RelatedEventList/RelatedEventList';
import { RelatedEventsContentByIdProps } from './RelatedEventsContentById.types';

export const RelatedEventsContentById: React.FC<RelatedEventsContentByIdProps> = ({
  title = 'Item',
  entityId,
  data,
  withoutBackMessage,
}) => {
  // * useMemo is used to prevent format changing before the modal is closed
  const memorizedId = useMemo(() => entityId, []);

  return (
    <>
      {data?.find((item) => memorizedId === item.id)?.related_events?.length > 0 ? (
        <RelatedEventList
          title={`${title} participant in such events (${
            data?.find((item) => memorizedId === item.id)?.events_count
          }):`}
          content={data?.find((item) => memorizedId === item.id)?.related_events}
        />
      ) : (
        <>{withoutBackMessage ? null : <RelatedEventList title="No related events" />}</>
      )}
    </>
  );
};
