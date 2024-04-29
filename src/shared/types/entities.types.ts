import { HEX } from './styles.types';

export type ImageSignature = {
  url: string;
};

export type UITemplate = {
  primary: HEX;
};

export type RelatedEvent = {
  id: number;
  title: string;
};

export type GoogleCalendar = {
  link: string;
  required: boolean;
  status: boolean;
};

export type UserDiscipline = {
  id: number;
  title: string;
};

export type GameDiscipline = {
  id: number;
  title: string;
  keyword: string;
  cover: ImageSignature;
};

export type UserCompany = {
  id: number;
  title: string;
  cover: ImageSignature;
  user_count: number;
  users: UserInCompany[];
};
export type UserCompanyShort = Pick<UserCompany, 'id' | 'title' | 'cover'>;
export type UserCompanyForm = Pick<UserCompany, 'id' | 'title' | 'cover' | 'users'>;
export type UserCompanyWithUsersCount = Pick<UserCompany, 'id' | 'title' | 'cover' | 'user_count'>;

export type Permission = {
  id: string;
  name: string;
  description: string;
};

export type Role = {
  id: number;
  description: string;
  title: string;
  permissions: Permission[];
};
export type RoleInUser = Pick<Role, 'id' | 'title' | 'description'>;

export type StudioObject = {
  id: number;
  name: string;
  keyword: string;
  events_count: number;
  related_events: RelatedEvent[];
};
export type Studio = Pick<StudioObject, 'id' | 'name' | 'keyword'>;
export type StudioWithEvents = Pick<
  StudioObject,
  'id' | 'name' | 'keyword' | 'events_count' | 'related_events'
>;

export type AnalyticStudioObject = {
  id: number;
  name: string;
  keyword: string;
  events_count: number;
  related_events: RelatedEvent[];
};
export type AnalyticStudio = Pick<AnalyticStudioObject, 'id' | 'name' | 'keyword'>;
export type AnalyticStudioWithEvents = Pick<
  AnalyticStudioObject,
  'id' | 'name' | 'keyword' | 'events_count' | 'related_events'
>;

export type ChannelObject = {
  id: number;
  name: string;
  events_count: number;
  related_events: RelatedEvent[];
};
export type Channel = Pick<ChannelObject, 'id' | 'name'>;
export type ChannelWithEvents = Pick<
  ChannelObject,
  'id' | 'name' | 'events_count' | 'related_events'
>;

export type LanguageObject = {
  id: number;
  name: string;
  keyword: string;
  events_count: number;
  related_events: RelatedEvent[];
};
export type Language = Pick<LanguageObject, 'id' | 'name' | 'keyword'>;
export type LanguageWithEvents = Pick<
  LanguageObject,
  'id' | 'name' | 'keyword' | 'events_count' | 'related_events'
>;

export type Region = {
  id: number;
  name: string;
  code: string;
};

export type SponsorObject = {
  id: number;
  name: string;
  events_count: number;
  related_events: RelatedEvent[];
};
export type Sponsor = Pick<SponsorObject, 'id' | 'name'>;
export type SponsorWithEvents = Pick<
  SponsorObject,
  'id' | 'name' | 'events_count' | 'related_events'
>;

export type TournamentType = {
  id: number;
  name: string;
};

export type MatchType = {
  name: string;
  value: number;
};

export type MatchFormat = {
  name: string;
  value: number;
};

export type TeamObject = {
  id: number;
  name: string;
  discipline: GameDiscipline;
  events_count: number;
  related_events: RelatedEvent[];
};
export type Team = Pick<TeamObject, 'id' | 'name' | 'discipline'>;
export type TeamWithEvents = Pick<
  TeamObject,
  'id' | 'name' | 'discipline' | 'events_count' | 'related_events'
>;

export type BrandingObject = {
  id: number;
  name: string;
  logo: ImageSignature;
  favicon: ImageSignature;
  visible: boolean;
};
export type Branding = Pick<BrandingObject, 'id' | 'name' | 'logo' | 'favicon' | 'visible'>;

export type UserObject = {
  id: number;
  company: UserCompanyShort;
  confirmed: boolean;
  deactivated: boolean;
  email: string;
  display_name: string;
  first_name: string;
  last_name: string;
  nick: string;
  avatar: ImageSignature;
  user_disciplines: UserDiscipline[];
  roles: RoleInUser[];
  google_calendar: GoogleCalendar;
  events_count: number;
  related_events: RelatedEvent[];
  is_unavailable: boolean;
};
export type User = Pick<
  UserObject,
  | 'id'
  | 'company'
  | 'confirmed'
  | 'deactivated'
  | 'email'
  | 'display_name'
  | 'first_name'
  | 'last_name'
  | 'nick'
  | 'avatar'
  | 'user_disciplines'
  | 'roles'
  | 'google_calendar'
>;
export type UserWithEvents = Pick<
  UserObject,
  | 'id'
  | 'company'
  | 'confirmed'
  | 'deactivated'
  | 'email'
  | 'display_name'
  | 'first_name'
  | 'last_name'
  | 'nick'
  | 'avatar'
  | 'user_disciplines'
  | 'roles'
  | 'google_calendar'
  | 'events_count'
  | 'related_events'
>;
export type UserOption = Pick<UserObject, 'id' | 'display_name' | 'nick' | 'avatar'>;
export type UserOptionWithDisciplines = Pick<
  UserObject,
  'id' | 'display_name' | 'nick' | 'avatar' | 'user_disciplines'
>;
export type UserOptionWithAvailability = Pick<
  UserObject,
  'id' | 'display_name' | 'nick' | 'avatar' | 'is_unavailable'
>;
export type UserInCalendarEntity = Pick<
  UserObject,
  'id' | 'display_name' | 'nick' | 'first_name' | 'last_name' | 'avatar'
>;
export type UserInComment = Pick<UserObject, 'id' | 'display_name'>;
export type UserLikeParticipant = Pick<
  UserObject,
  'id' | 'display_name' | 'nick' | 'first_name' | 'last_name' | 'avatar' | 'user_disciplines'
>;
export type UserInDashboard = Pick<
  UserObject,
  | 'id'
  | 'company'
  | 'confirmed'
  | 'deactivated'
  | 'email'
  | 'display_name'
  | 'first_name'
  | 'last_name'
  | 'nick'
  | 'avatar'
>;
export type UserInCompany = Pick<
  UserObject,
  | 'id'
  | 'company'
  | 'confirmed'
  | 'deactivated'
  | 'email'
  | 'display_name'
  | 'first_name'
  | 'last_name'
  | 'nick'
  | 'avatar'
  | 'roles'
>;

export type UserNotificationsEntity = {
  id: number;
  is_deleted: boolean;
  title: string;
  type: 'GameDiscipline' | 'Tournament' | 'Corporate' | 'Match' | 'User' | 'UserCompany' | 'Role';
  action: 'create' | 'update' | 'destroy';
};

export type UserNotification = {
  id: number;
  description: string;
  seen: boolean;
  time_ago: string;
  title: string;
  author: UserInCalendarEntity;
  entity: UserNotificationsEntity;
};

export type UserNotificationPage = {
  notifications: UserNotification[];
  total_pages: number;
  start_id: number;
};

export type CalendarFilters = {
  game_discipline: GameDiscipline[];
  studio: Studio[];
  analytic_studio: AnalyticStudio[];
  channel: Channel[];
  managers: UserInCalendarEntity[];
  main_participants: UserInCalendarEntity[];
  media_representatives: UserInCalendarEntity[];
  staff_members: UserInCalendarEntity[];
  analytics: UserInCalendarEntity[];
  commentators: UserInCalendarEntity[];
};

export type MatchCast = {
  id: number;
  language: Language;
  studio: Studio;
  analytic_studio: AnalyticStudio;
  channels: Channel[];
  commentators: UserInCalendarEntity[];
  backup_commentator: UserInCalendarEntity;
  analytics: UserInCalendarEntity[];
  host_analytic: UserInCalendarEntity;
  staff_members: UserInCalendarEntity[];
};

export type Match = {
  id: number;
  start_time: string;
  start_date: string;
  end_time: string;
  team_one: string;
  team_two: string;
  format: string;
  visible: boolean;
  match_casts: MatchCast[];
};
export type MatchInMatchForm = Pick<
  Match,
  'id' | 'start_time' | 'start_date' | 'end_time' | 'visible' | 'match_casts'
> & {
  team_one: Team;
  team_two: Team;
  format: MatchFormat;
  tournament: TournamentShort;
};

export type TournamentDescription = {
  id: number;
  title: string;
  description: string;
};

export type TournamentMedia = {
  id: number;
  title: string;
  description: string;
  updated_at: string;
};

export type TournamentScheduleElement = {
  start_date: string;
  matches: Match[];
};

export type TournamentSchedule = {
  dates: TournamentScheduleElement[];
  ui_template: UITemplate;
};

export type Tournament = {
  id: number;
  entity_type: string;
  comments_count: number;
  teams_count: number;
  cover: ImageSignature;
  descriptions: TournamentDescription[];
  media: TournamentMedia[];
  matches: Match[];
  discipline: GameDiscipline;
  discipline_keyword: string;
  start_date: string;
  end_date: string;
  title: string;
  visible: boolean;
  main_participants: UserInCalendarEntity[];
  media_representatives: UserInCalendarEntity[];
  commentators: UserInCalendarEntity[];
  backup_commentators: UserInCalendarEntity[];
  analytics: UserInCalendarEntity[];
  host_analytics: UserInCalendarEntity[];
  staff: UserInCalendarEntity[];
  channels: Channel[];
  sponsors: Sponsor[];
  owner: UserInCalendarEntity;
  region: Region;
  type: TournamentType;
  tier: number;
  ui_template: UITemplate;
};
export type TournamentInCalendarEntity = Pick<
  Tournament,
  | 'id'
  | 'type'
  | 'tier'
  | 'entity_type'
  | 'title'
  | 'start_date'
  | 'end_date'
  | 'visible'
  | 'main_participants'
  | 'media_representatives'
  | 'matches'
  | 'ui_template'
  | 'discipline_keyword'
> &
  Partial<
    Pick<
      Tournament,
      'commentators' | 'backup_commentators' | 'analytics' | 'host_analytics' | 'staff' | 'channels'
    >
  >;
export type TournamentShort = Pick<
  Tournament,
  | 'id'
  | 'tier'
  | 'title'
  | 'entity_type'
  | 'start_date'
  | 'end_date'
  | 'ui_template'
  | 'discipline_keyword'
  | 'discipline'
>;
export type TournamentById = Omit<Tournament, 'matches' | 'media'>;
export type TournamentInTournamentForm = Omit<Tournament, 'matches'>;
export type TournamentWithTier = {
  tier: number;
  list: TournamentInCalendarEntity[];
};

export type Corporate = {
  id: number;
  name: string;
  type: string;
  location: string;
  comments_count: number;
  company: UserCompanyShort;
  description: string;
  start_date: string;
  start_time: string;
  end_time: string;
  main_participants: UserInCalendarEntity[];
  participants: UserLikeParticipant[];
  visible: boolean;
  cover: ImageSignature;
  ui_template: UITemplate;
};
export type CorporateInCalendarEntity = Pick<
  Corporate,
  | 'id'
  | 'name'
  | 'location'
  | 'start_date'
  | 'start_time'
  | 'end_time'
  | 'visible'
  | 'main_participants'
  | 'ui_template'
>;
export type CorporateWithTier = {
  tier: number;
  list: Corporate[];
};

export type UserComment = {
  id: number;
  cover: ImageSignature;
  message: string;
  time: string;
  user: UserInComment;
};

export type ManagementUsersGroup = {
  id: number;
  description: string;
  title: string;
  user_count: number;
  users: UserInDashboard[];
};

export type PermissionStatus = 'all' | 'index' | 'show' | 'create' | 'edit' | 'update' | 'delete';

export type PermissionDetails = {
  grant: PermissionStatus[];
  deny: PermissionStatus[];
  allowed_routes: string[];
};

export type AuthPermissions = {
  permissions: Record<string, PermissionDetails>;
  routes: string[];
};

export type ManagementItems = {
  Discipline: number;
  Tournament: number;
  Match: number;
  Studio: number;
  'Studio analytics': number;
  Channel: number;
  Language: number;
  Team: number;
  Sponsor: number;
  'Seasonal branding': number;
  'Deleted items': {
    count: number;
    items: {
      Discipline: number;
      Tournament: number;
      Match: number;
      Studio: number;
      'Studio analytics': number;
      Channel: number;
      Language: number;
      Team: number;
      Sponsor: number;
      'Seasonal branding': number;
    };
  };
};

export type ItemWithRelatedEvents = {
  id: number;
  name?: string;
  events_count?: number;
  related_events?: RelatedEvent[];
};

export type PreDeletedMatch = {
  id: number;
  tournament_name: string;
  team_one_name: string;
  team_two_name: string;
};

export type PreDeletedTournament = {
  id: number;
  title: string;
  matches: PreDeletedMatch[];
};

export type PreDeletedDiscipline = {
  id: number;
  title: string;
  tournaments: PreDeletedTournament[];
};
