import { MenuItems } from './Menu.types';

export const entityItemsMapping: MenuItems[] = [
  { key: 'Studio', path: 'active/entity/studio', label: 'Studio' },
  { key: 'Studio analytics', path: 'active/entity/analytic_studio', label: 'Studio analytic' },
  { key: 'Channel', path: 'active/entity/channel', label: 'Channel' },
  { key: 'Team', path: 'active/entity/team', label: 'Team' },
  { key: 'Sponsor', path: 'active/entity/sponsor', label: 'Sponsor' },
  { key: 'Language', path: 'active/entity/language', label: 'Language' },
  { key: 'Seasonal branding', path: 'active/branding', label: 'Seasonal branding' },
  {
    key: 'Deleted items',
    label: 'Deleted items',
    items: [
      { key: 'Discipline', path: 'deleted/calendar-entity/discipline', label: 'Discipline' },
      { key: 'Tournament', path: 'deleted/calendar-entity/tournament', label: 'Tournament' },
      { key: 'Match', path: 'deleted/calendar-entity/match', label: 'Match' },
      { key: 'Studio', path: 'deleted/entity/studio', label: 'Studio' },
      {
        key: 'Studio analytics',
        path: 'deleted/entity/analytic_studio',
        label: 'Studio analytic',
      },
      { key: 'Channel', path: 'deleted/entity/channel', label: 'Channel' },
      { key: 'Language', path: 'deleted/entity/language', label: 'Language' },
      { key: 'Team', path: 'deleted/entity/team', label: 'Team' },
      { key: 'Sponsor', path: 'deleted/entity/sponsor', label: 'Sponsor' },
      { key: 'Seasonal branding', path: 'deleted/entity/branding', label: 'Seasonal branding' },
    ],
  },
];
