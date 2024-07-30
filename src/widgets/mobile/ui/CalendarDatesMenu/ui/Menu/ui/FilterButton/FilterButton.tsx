import { useTheme } from '@emotion/react';
import { useEffect, useMemo } from 'react';

import { useGetCalendarFilters } from '@/entities/calendar';
import { IconSliderSvg } from '@/shared/assets';
import { useCustomSearchParams } from '@/shared/lib';
import {
  AnalyticStudio,
  Channel,
  GameDiscipline,
  Setup,
  Stream,
  Studio,
  UserOption,
} from '@/shared/types/entities.types';
import { SelectableValueWithChildren } from '@/shared/types/values.types';
import { Modal } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';

import { filterParams } from '../../../../const';
import { filterOptionFormatter } from '../../../../lib';
import { FilterContent } from '../FilterContent/FilterContent';
import { FilterButtonProps } from './FilterButton.types';

export const FilterButton: React.FC<FilterButtonProps> = ({ isOpen, setSideWindowsState }) => {
  const theme = useTheme();

  const { data: calendarFilters } = useGetCalendarFilters();

  const { arrayParams, setArrayParams, removeParam } = useCustomSearchParams(filterParams);

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

  const onClickFilterButton = () => {
    setSideWindowsState((current) => ({
      dateDrawer: false,
      filterModal: !current.filterModal,
      formatDrawer: false,
    }));
  };
  const onCloseFilterModal = () => {
    setSideWindowsState((current) => ({
      ...current,
      filterModal: false,
    }));
  };

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
      <Modal isOpen={isOpen} onClose={onCloseFilterModal} isMobile>
        <FilterContent
          calendarFiltersOptions={calendarFiltersOptions}
          onCloseFilterModal={onCloseFilterModal}
        />
      </Modal>

      <PrimaryButton
        padding="2px"
        variant="custom"
        IconComponent={IconSliderSvg}
        customStyles={{
          iconColor: theme.appColors.primary_05,
        }}
        onClick={onClickFilterButton}
        data-testid="FilterButton"
      />
    </>
  );
};
