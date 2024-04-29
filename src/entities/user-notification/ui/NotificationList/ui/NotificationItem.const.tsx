import { IconBulbSvg, IconCircleCheckSvg, IconCircleCrossSvg } from '@/shared/assets';

import { NotificationActionTypes, NotificationEntityTypes } from './NotificationItem.types';

export const actionTypes: NotificationActionTypes = {
  create: {
    text: 'created',
    Icon: <IconCircleCheckSvg />,
  },
  update: {
    text: 'updated',
    Icon: <IconBulbSvg />,
  },
  destroy: {
    text: 'deleted',
    Icon: <IconCircleCrossSvg />,
  },
};

export const entityTypes: NotificationEntityTypes = {
  GameDiscipline: {
    text: 'discipline',
    link: [''],
  },
  Tournament: {
    text: 'tournament',
    link: ['/calendar', 'tournament', null, 'main'],
  },
  Corporate: {
    text: 'corporate',
    link: ['/calendar', 'corporate', null, 'main'],
  },
  Match: {
    text: 'match',
    link: ['/calendar', 'tournament', null, 'schedule'],
  },
  User: {
    text: 'user',
    link: ['/management', 'users', 'user', null],
  },
  UserCompany: {
    text: 'company',
    link: ['/management', 'users', 'company', null, 'edit'],
  },
  Role: {
    text: 'role',
    link: ['/management', 'users', 'entity', 'role'],
  },
};
