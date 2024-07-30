import dayjs from 'dayjs';
import { useCallback, useEffect, useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { useGetAccountSettings, useUpdateAccountSettings } from '@/entities/account-setting';
import { useGetCalendarFilters } from '@/entities/calendar';
import { IconPlusSvg, IconUserCheckSvg } from '@/shared/assets';
import {
  useCheckAccess,
  useCustomSearchParams,
  useNavigateWithParams,
  useUpdateEffect,
} from '@/shared/lib';
import {
  AnalyticStudio,
  Channel,
  GameDiscipline,
  Setup,
  Stream,
  Studio,
  UserOption,
} from '@/shared/types/entities.types';
import { SelectableValue, SelectableValueWithChildren } from '@/shared/types/values.types';
import { CreateEntityModal, EditEntityModal } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';
import { AccessControl } from '@/shared/ui/misc';

import { filterParams, formatButtons, requestButtons } from '../../const';
import { filterOptionFormatter } from '../../lib';
import { useDatesMenuStore } from '../../model/datesMenuStore/datesMenuStore.store';
import { createFormTemplates, editFormTemplates } from './Menu.const';
import * as S from './Menu.styles';
import { CalendarFormat } from './Menu.types';
import { DatesNav } from './ui/DatesNav/DatesNav';
import { FilterContent } from './ui/FilterContent/FilterContent';
import { FilterDropDown } from './ui/FilterDropDown/FilterDropDown';
import { FormatDropDown } from './ui/FormatDropDown/FormatDropDown';

export const Menu: React.FC = () => {
  const navigate = useNavigateWithParams(filterParams);
  const location = useLocation();
  const checkAccess = useCheckAccess();

  const creationRequestType = useDatesMenuStore((state) => state.creationRequestType);
  const setCreationRequestType = useDatesMenuStore((state) => state.setCreationRequestType);
  const editingRequestType = useDatesMenuStore((state) => state.editingRequestType);
  const setEditingRequestType = useDatesMenuStore((state) => state.setEditingRequestType);

  const { params, setParam } = useCustomSearchParams(['start_at']);
  const { arrayParams, setArrayParams, removeParam } = useCustomSearchParams(filterParams);

  const { data: calendarFilters } = useGetCalendarFilters();

  const { data: accountSettings, isFetching: isFetchingGetAccountSettings } =
    useGetAccountSettings();
  const { mutate: onUpdateAccountSettings, isLoading: isLoadingUpdateAccountSettings } =
    useUpdateAccountSettings();

  const calendarFiltersCount = useMemo(
    () => Object.values(arrayParams).reduce((acc, item) => acc + item.length, 0),
    [arrayParams],
  );

  // * Create filter options for filter dropdown.
  const calendarFiltersOptions = useMemo<SelectableValueWithChildren[]>(() => {
    if (!calendarFilters) {
      return [];
    }

    return [
      filterOptionFormatter<GameDiscipline>(
        'Discipline',
        'game_discipline',
        calendarFilters.game_discipline,
        'title',
      ),
      filterOptionFormatter<AnalyticStudio>(
        'Analyst Studio',
        'analytic_studio',
        calendarFilters.analytic_studio,
        'name',
      ),
      filterOptionFormatter<Studio>('Studio', 'studio', calendarFilters.studio, 'name'),
      filterOptionFormatter<Setup>('Setup', 'setup', calendarFilters.setup, 'name'),
      filterOptionFormatter<Channel>('Channel', 'channel', calendarFilters.channel, 'name'),
      filterOptionFormatter<Stream>('Stream', 'stream', calendarFilters.stream, 'name'),
      filterOptionFormatter<UserOption>(
        'Main participants',
        'main_participants',
        calendarFilters.main_participants,
        'display_name',
      ),
      filterOptionFormatter<UserOption>(
        'Media Representatives',
        'media_representatives',
        calendarFilters.media_representatives,
        'display_name',
      ),
      filterOptionFormatter<UserOption>(
        'Casters',
        'commentators',
        calendarFilters.commentators,
        'display_name',
      ),
      filterOptionFormatter<UserOption>(
        'Analysts',
        'analytics',
        calendarFilters.analytics,
        'display_name',
      ),
      filterOptionFormatter<UserOption>(
        'Staff',
        'staff_members',
        calendarFilters.staff_members,
        'display_name',
      ),
    ];
  }, [calendarFilters]);

  // * Get calendar format from url path.
  const match = matchPath('/calendar/:format', location.pathname);
  const calendarFormat = useMemo(
    () => match?.params?.format as CalendarFormat,
    [match?.params?.format],
  );

  // * Get calendar format value for format buttons.
  const calendarFormatValue = useMemo(
    () => formatButtons.find((item) => item.value === calendarFormat),
    [calendarFormat],
  );

  const filteredFormatButtons = useMemo(() => {
    const scopesToCheck = formatButtons.map((item) => item.value);

    return scopesToCheck
      .filter((scope) => checkAccess([`get::/api/v1/calendar?scope=${scope}`]))
      .map((scope) => formatButtons.find((item) => item.value === scope));
  }, [checkAccess]);

  const onChangeCalendarFormat = (newFormat: SelectableValue) => {
    navigate(`/calendar/${newFormat.value}`);
  };

  const onOpenCreationModal = useCallback(() => {
    setCreationRequestType({ label: 'Discipline', value: 'discipline' });
  }, [setCreationRequestType]);

  // * Callback that set current user filter option or remove it.
  const onClickCurrentUserButton = useCallback(() => {
    const formData = new FormData();

    formData.append(
      'current_user_filter_enabled',
      accountSettings?.current_user_filter_enabled ? 'false' : 'true',
    );

    onUpdateAccountSettings({ formData });
  }, [accountSettings?.current_user_filter_enabled, onUpdateAccountSettings]);

  useEffect(() => {
    // * If the start_at parameter is not specified, then set the current date.
    if (calendarFormat && (!params.start_at || !dayjs(params.start_at).isValid())) {
      setParam('start_at', dayjs().startOf(calendarFormat).format('YYYY-MM-DD'), true);
      return;
    }

    // * If the start_at parameter is specified, then set the start of the date type.
    if (
      calendarFormat &&
      dayjs(params.start_at).startOf(calendarFormat).format('YYYY-MM-DD') !== params.start_at
    ) {
      setParam('start_at', dayjs().startOf(calendarFormat).format('YYYY-MM-DD'), true);
    }
  }, [params.start_at, setParam]);

  useUpdateEffect(() => {
    if (calendarFormat) {
      setParam('start_at', dayjs().startOf(calendarFormat).format('YYYY-MM-DD'), true);
    }
  }, [calendarFormat]);

  // * Effect that filter options in array params if they are not in filter options.
  useEffect(() => {
    // * If there are no array params, then return.
    if (!calendarFiltersOptions || calendarFiltersOptions.length === 0) {
      return;
    }

    for (const filterName in arrayParams) {
      const filterOption = calendarFiltersOptions.find((item) => item.value === filterName);

      // * If there is no filter option, then remove the parameter.
      if (!filterOption) {
        removeParam(filterName, true);
        continue;
      }

      // * If there is a filter option, then filter the array parameter.
      const filterOptionValues = filterOption.children?.map((item) => item.value) ?? [];
      const filteredArrayParam = arrayParams[filterName].filter((item) =>
        filterOptionValues.includes(item),
      );

      // * If the filtered array parameter is not equal to the array parameter, then set the filtered array parameter.
      if (filteredArrayParam.length !== arrayParams[filterName].length) {
        setArrayParams(filterName, filteredArrayParam, true);
      }
    }
  }, [arrayParams, calendarFiltersOptions, removeParam, setArrayParams]);

  return (
    <>
      <CreateEntityModal
        requestButtons={requestButtons}
        formTemplates={createFormTemplates}
        requestType={creationRequestType}
        setRequestType={setCreationRequestType}
      />

      <EditEntityModal
        formTemplates={editFormTemplates}
        requestType={editingRequestType}
        setRequestType={setEditingRequestType}
      />

      <S.Root>
        {calendarFormatValue && (
          <>
            <S.LeftPart>
              <S.Filters>
                <FilterDropDown
                  activeFiltersCount={calendarFiltersCount}
                  ContentComponent={<FilterContent filterOptions={calendarFiltersOptions} />}
                />

                <PrimaryButton
                  IconComponent={IconUserCheckSvg}
                  variant={accountSettings?.current_user_filter_enabled ? 'primary' : 'outlined'}
                  onClick={onClickCurrentUserButton}
                  isLoading={isFetchingGetAccountSettings || isLoadingUpdateAccountSettings}
                />
              </S.Filters>

              <DatesNav calendarFormat={calendarFormat} />
            </S.LeftPart>

            <S.RightPart>
              <FormatDropDown
                calendarFormatValue={calendarFormatValue}
                setCalendarFormat={onChangeCalendarFormat}
                formatButtons={filteredFormatButtons}
              />

              <AccessControl
                necessaryPermissions={[
                  'post::/api/v1/corporates',
                  'post::/api/v1/tournaments',
                  'post::/api/v1/matches',
                  'post::/api/v1/gamedisciplines',
                ]}
                method="some"
              >
                <PrimaryButton
                  label="Add item"
                  variant="primary"
                  IconComponent={IconPlusSvg}
                  onClick={onOpenCreationModal}
                />
              </AccessControl>
            </S.RightPart>
          </>
        )}
      </S.Root>
    </>
  );
};
