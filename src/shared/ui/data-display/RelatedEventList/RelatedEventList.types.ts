import { RelatedEvent } from '@/shared/types/entities.types';

export type RelatedEventListProps = {
  title: string;
  content?: string | RelatedEvent[];
};
