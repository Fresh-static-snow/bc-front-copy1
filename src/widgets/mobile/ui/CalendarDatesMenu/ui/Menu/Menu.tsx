import { useMemo, useState } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { CreateEntityModal, EditEntityModal } from '@/shared/ui/feedback';

import { NavigationMenu } from '../../../NavigationMenu';
import { formatButtons, requestButtons } from '../../const';
import { useDatesMobileMenuStore } from '../../model';
import { CalendarFormat } from '../../types';
import { createFormTemplates, editFormTemplates } from './Menu.const';
import * as S from './Menu.styles';
import { CurrentUserButton } from './ui/CurrentUserButton/CurrentUserButton';
import { DatesButton } from './ui/DatesButton/DatesButton';
import { FilterButton } from './ui/FilterButton/FilterButton';
import { FormatButton } from './ui/FormatButton/FormatButton';
import { MonthHeader } from './ui/MonthHeader/MonthHeader';
import { WeekHeader } from './ui/WeekHeader/WeekHeader';

export const Menu: React.FC = () => {
  const location = useLocation();
  const [sideWindowsState, setSideWindowsState] = useState({
    dateDrawer: false,
    filterModal: false,
    formatDrawer: false,
  });

  const creationRequestType = useDatesMobileMenuStore((state) => state.creationRequestType);
  const setCreationRequestType = useDatesMobileMenuStore((state) => state.setCreationRequestType);
  const editingRequestType = useDatesMobileMenuStore((state) => state.editingRequestType);
  const setEditingRequestType = useDatesMobileMenuStore((state) => state.setEditingRequestType);

  // * Get calendar format from url path.
  const match = matchPath('/calendar/:format', location.pathname);
  const matchWeek = matchPath('/calendar/week', location.pathname);
  const matchMonth = matchPath('/calendar/month', location.pathname);
  const calendarFormat = useMemo(
    () => match?.params?.format as CalendarFormat,
    [match?.params?.format],
  );

  // * Get calendar format value for format buttons.
  const calendarFormatValue = useMemo(
    () => formatButtons.find((item) => item.value === calendarFormat),
    [calendarFormat],
  );

  return (
    <>
      <CreateEntityModal
        isMobile
        requestButtons={requestButtons}
        formTemplates={createFormTemplates}
        requestType={creationRequestType}
        setRequestType={setCreationRequestType}
      />

      <EditEntityModal
        isMobile
        formTemplates={editFormTemplates}
        requestType={editingRequestType}
        setRequestType={setEditingRequestType}
      />

      <S.Root>
        {calendarFormatValue && (
          <>
            <S.LeftPart>
              <NavigationMenu />

              <DatesButton
                isOpen={sideWindowsState.dateDrawer}
                setSideWindowsState={setSideWindowsState}
                calendarFormat={calendarFormat}
              />
            </S.LeftPart>

            <S.RightPart>
              <CurrentUserButton />

              <FilterButton
                isOpen={sideWindowsState.filterModal}
                setSideWindowsState={setSideWindowsState}
              />

              <FormatButton
                isOpen={sideWindowsState.formatDrawer}
                setSideWindowsState={setSideWindowsState}
                calendarFormatValue={calendarFormatValue}
              />
            </S.RightPart>
          </>
        )}
      </S.Root>
      {matchWeek && <WeekHeader />}
      {matchMonth && <MonthHeader />}
    </>
  );
};
