import { useTheme } from '@emotion/react';
import { useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useGetTournament } from '@/entities/tournament';
import { IconChevronLeftSvg, IconEditSvg } from '@/shared/assets';
import { TabValue } from '@/shared/types/values.types';
import { Counter } from '@/shared/ui/data-display';
import { EditEntityModal } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';
import { SubMenu, TabsMenuMobile } from '@/shared/ui/layouts';

import { useTournamentMobileMenuStore } from '../../model';
import { editFormTemplates } from './Menu.const';
import { LocationState } from './Menu.types';

export const Menu: React.FC = () => {
  const theme = useTheme();
  const { id: eventId } = useParams();
  const { data: mainData } = useGetTournament(eventId);
  const navigate = useNavigate();
  const location = useLocation();

  const editingRequestType = useTournamentMobileMenuStore((state) => state.editingRequestType);
  const setEditingRequestType = useTournamentMobileMenuStore(
    (state) => state.setEditingRequestType,
  );

  const tabs = useMemo<TabValue[]>(
    () => [
      { label: 'Main', value: 'main' },
      { label: 'Media', value: 'media' },
      { label: 'Schedule', value: 'schedule' },
      {
        label: 'Comments',
        value: 'comments',
        additional: <Counter count={mainData?.comments_count || 0} />,
      },
    ],
    [mainData?.comments_count],
  );

  const [activeTab, setActiveTab] = useState<TabValue>(() => {
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];

    const defaultTab = tabs.find((tab) => tab.value === lastSegment);

    return defaultTab;
  });

  const onChangeTab = (tab: TabValue) => {
    setActiveTab(tab);
    const state = location.state as LocationState;
    navigate(`/calendar/tournament/${eventId}/${tab.value}`, { state, preventScrollReset: true });
  };

  const onClickBackButton = () => {
    const state = location.state as LocationState;
    if (state) {
      navigate(state?.prevPath, { preventScrollReset: true });
    } else {
      navigate('/calendar', { preventScrollReset: true });
    }
  };

  return (
    <>
      <EditEntityModal
        isMobile
        formTemplates={editFormTemplates}
        requestType={editingRequestType}
        setRequestType={setEditingRequestType}
      />

      <SubMenu
        title={mainData?.title}
        backButtonPrimaryLabel={null}
        color={theme.appColors.primary_05}
        buttonPadding="0"
        backgroundColor={theme.appColors.primary_02}
        borderNone
        CustomBackButton={
          <PrimaryButton
            IconComponent={IconChevronLeftSvg}
            variant="custom"
            padding="0"
            customStyles={{
              iconColor: theme.appColors.primary_05,
            }}
            onClick={onClickBackButton}
            data-testid="back-button"
          />
        }
        AdditionalComponent={
          <PrimaryButton
            IconComponent={IconEditSvg}
            variant="custom"
            padding="0"
            customStyles={{
              iconColor: theme.appColors.primary_05,
              disabledOpacity: '0',
            }}
            onClick={() => {}}
            data-testid="edit-button"
            disabled
          />
        }
      />

      <TabsMenuMobile tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />
    </>
  );
};
