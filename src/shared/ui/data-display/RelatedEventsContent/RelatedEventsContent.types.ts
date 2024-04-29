import { RelatedEvent } from '@/shared/types/entities.types';

export type RelatedEventsContentProps = {
  events_count?: number;
  related_events?: RelatedEvent[];
};
