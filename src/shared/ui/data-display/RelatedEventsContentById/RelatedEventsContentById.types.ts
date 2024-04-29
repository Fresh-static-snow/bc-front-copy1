import { ItemWithRelatedEvents } from '@/shared/types/entities.types';

export type RelatedEventsContentByIdProps = {
  /**
   * @default 'Item'
   */
  title?: string;
  entityId: number | string;
  data: ItemWithRelatedEvents[];
  withoutBackMessage?: boolean;
};
