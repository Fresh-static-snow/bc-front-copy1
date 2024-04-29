import { AxiosResponse } from 'axios';

import { axiosInstance } from '@/shared/api';
import { ResponseData } from '@/shared/types/services.types';

import {
  CalendarScope,
  GetCalendarFiltersResponse,
  GetCalendarParams,
  GetCalendarResponse,
} from './calendar.service.types';

export const getCalendar = async <T extends CalendarScope>({
  focused_date,
  scope,
  searchParams,
}: GetCalendarParams): Promise<GetCalendarResponse<T>> => {
  const result: AxiosResponse<ResponseData<GetCalendarResponse<T>>> = await axiosInstance.get(
    'calendar',
    { params: { focused_date, scope, ...searchParams } },
  );
  return result.data.data;
};

export const getCalendarFilters = async () => {
  const result: AxiosResponse<ResponseData<GetCalendarFiltersResponse>> = await axiosInstance.get(
    'calendar/filters',
  );
  return result.data.data;
};
