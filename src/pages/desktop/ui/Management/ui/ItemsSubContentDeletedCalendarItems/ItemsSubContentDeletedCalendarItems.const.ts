import { BodyTemplates } from './ItemsSubContentDeletedCalendarItems.types';
import { BodyDeletedDisciplineItems } from './ui/BodyDeletedDisciplineItems/BodyDeletedDisciplineItems';
import { BodyDeletedMatchItems } from './ui/BodyDeletedMatchItems/BodyDeletedMatchItems';
import { BodyDeletedSegmentItems } from './ui/BodyDeletedSegmentItems/BodyDeletedSegmentItems';
import { BodyDeletedTournamentItems } from './ui/BodyDeletedTournamentItems/BodyDeletedTournamentItems';

export const bodyTemplates: BodyTemplates = {
  discipline: BodyDeletedDisciplineItems,
  tournament: BodyDeletedTournamentItems,
  match: BodyDeletedMatchItems,
  segment: BodyDeletedSegmentItems,
};
