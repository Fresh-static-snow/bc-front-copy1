import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { IconPlusSvg } from '@/shared/assets';
import { TabValue } from '@/shared/types/values.types';
import { CreateEntityModal, EditEntityModal } from '@/shared/ui/feedback';
import { PrimaryButton } from '@/shared/ui/inputs';
import { AccessControl } from '@/shared/ui/misc';
import { Tabs } from '@/shared/ui/navigation';

import { useManagementMenuStore } from '../../model';
import { createFormTemplates, editFormTemplates, requestButtons } from './Menu.const';
import * as S from './Menu.styles';

export const Menu: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const creationRequestType = useManagementMenuStore((state) => state.creationRequestType);
  const setCreationRequestType = useManagementMenuStore((state) => state.setCreationRequestType);
  const editingRequestType = useManagementMenuStore((state) => state.editingRequestType);
  const setEditingRequestType = useManagementMenuStore((state) => state.setEditingRequestType);

  const tabs = useMemo<TabValue[]>(
    () => [
      { label: 'Users', value: 'users' },
      { label: 'Items', value: 'items' },
    ],
    [],
  );

  const [activeTab, setActiveTab] = useState<TabValue>(() => {
    const pathSegments = location.pathname.split('/');
    const defaultTab = tabs.find((tab) => pathSegments.includes(tab?.value));

    return defaultTab;
  });

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const newTab = tabs.find((tab) => pathSegments.includes(tab?.value));

    setActiveTab(newTab);
  }, [location.pathname, tabs]);

  const onOpenCreationModal = useCallback(() => {
    setCreationRequestType(
      activeTab?.value === 'users'
        ? { label: 'User', value: 'user' }
        : { label: 'Studio', value: 'studio' },
    );
  }, [activeTab?.value, setCreationRequestType]);

  const onChangeTab = (tab: TabValue) => {
    setActiveTab(tab);
    navigate(`/management/${tab?.value}`);
  };

  return (
    <>
      <CreateEntityModal
        requestButtons={requestButtons?.[activeTab?.value] ?? []}
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
        <Tabs tabList={tabs} activeTab={activeTab} setActiveTab={onChangeTab} />

        <AccessControl
          necessaryPermissions={[
            'post::/api/v1/users',
            'post::/api/v1/usercompanies',
            'post::/api/v1/roles',
          ]}
        >
          <PrimaryButton
            label="Create Item"
            variant="primary"
            IconComponent={IconPlusSvg}
            onClick={onOpenCreationModal}
          />
        </AccessControl>
      </S.Root>
    </>
  );
};
