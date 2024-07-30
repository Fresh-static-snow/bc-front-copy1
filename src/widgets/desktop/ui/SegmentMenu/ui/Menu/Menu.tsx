import { useCallback, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useGetSegment } from '@/entities/event-segment';
import { IconEditSvg } from '@/shared/assets';
import { TabValue } from '@/shared/types/values.types';
import { Counter } from '@/shared/ui/data-display';
import { EditEntityModal } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';
import { SubMenu, TabsMenu } from '@/shared/ui/layouts';
import { AccessControl } from '@/shared/ui/misc';

import { useSegmentMenuStore } from '../../model';
import { editFormTemplates } from './Menu.const';
import { LocationState } from './Menu.types';

export const Menu: React.FC = () => {
  const { id: eventId } = useParams();
  const { data: mainData } = useGetSegment(eventId);
  const navigate = useNavigate();
  const location = useLocation();

  const editingRequestType = useSegmentMenuStore((state) => state.editingRequestType);
  const setEditingRequestType = useSegmentMenuStore((state) => state.setEditingRequestType);

  const tabs = useMemo<TabValue[]>(
    () => [
      { label: 'Main', value: 'main' },
      { label: 'Media', value: 'media' },
      {
        label: 'Comments',
        value: 'comments',
        additional: <Counter count={mainData?.comments_count || 0} />,
      },
    ],
    [mainData?.comments_count],
  );

  const [activeTab, setActiveTab] = useState<TabValue>(() => {
    // * Get the last segment of the path as the active tab value
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];

    // * Find the tab with a matching value
    const defaultTab = tabs.find((tab) => tab.value === lastSegment);

    // * Set the active tab as the defaultTab or the first tab if no match found
    return defaultTab;
  });

  const onClickEdit = useCallback(() => {
    setEditingRequestType({
      label: 'Segment',
      value: 'segment',
      additional: String(eventId),
    });
  }, [eventId, setEditingRequestType]);

  const onChangeTab = (tab: TabValue) => {
    setActiveTab(tab);
    const state = location.state as LocationState;
    navigate(`/calendar/segment/${eventId}/${tab.value}`, { state });
  };

  return (
    <>
      <EditEntityModal
        formTemplates={editFormTemplates}
        requestType={editingRequestType}
        setRequestType={setEditingRequestType}
      />

      <SubMenu
        title={mainData?.title}
        backButtonLabel="Calendar"
        backButtonLink="/calendar"
        AdditionalComponent={
          <AccessControl
            necessaryPermissions={['get::/api/v1/matches/:id/edit', 'put::/api/v1/matches/:id']}
          >
            <PrimaryButton
              label="Edit item"
              variant="primary"
              IconComponent={IconEditSvg}
              onClick={onClickEdit}
            />
          </AccessControl>
        }
      />

      <TabsMenu tabs={tabs} activeTab={activeTab} onChangeTab={onChangeTab} />
    </>
  );
};
