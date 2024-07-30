import { useCallback } from 'react';

import {
  useChangeBrandingStatus,
  useGetBrandingOptions,
  usePreDeleteBranding,
} from '@/entities/branding';
import { EditEntitySwitchableList } from '@/entities/management';
import { useConfirmationActions } from '@/shared/lib';
import { ConfirmationModal } from '@/shared/ui/feedback';
import { SlicedContentLayout } from '@/shared/ui/layouts';
import { useManagementMenuStore } from '@/widgets/desktop';

const ItemsSubContentBranding: React.FC = () => {
  const setEditingRequestType = useManagementMenuStore((state) => state.setEditingRequestType);

  const { data: brandingData } = useGetBrandingOptions();

  const { mutateAsync: onChangeBrandingStatus, isLoading: isChangeLoading } =
    useChangeBrandingStatus();
  const { mutateAsync: onDeleteBranding, isLoading: isDeleteLoading } = usePreDeleteBranding();

  const { confirmDeleteData, onOpenDeleteModal, onCloseDeleteModal, onDelete } =
    useConfirmationActions<string | number>({
      onDeleteItem: (data) => {
        onDeleteBranding({ id: data });
      },
    });

  const onSwitch = useCallback(
    (id: number | string) => {
      const formData = new FormData();
      formData.append('id', String(id));

      onChangeBrandingStatus({ formData });
    },
    [onChangeBrandingStatus],
  );

  const onEdit = useCallback(
    (id: number | string) => {
      setEditingRequestType({
        value: 'branding',
        label: 'Branding',
        additional: String(id),
      });
    },
    [setEditingRequestType],
  );

  return (
    <>
      <ConfirmationModal
        isOpen={!!confirmDeleteData}
        isLoading={isDeleteLoading || isChangeLoading}
        onClose={onCloseDeleteModal}
        onConfirm={onDelete}
        title="Are you sure?"
        message="Would you like to remove this item?"
      />

      <SlicedContentLayout.Section width="608px" borderRight>
        <EditEntitySwitchableList
          mainKey="content-edit-branding"
          dataList={brandingData}
          onSwitch={onSwitch}
          onEdit={onEdit}
          onDelete={onOpenDeleteModal}
          isLoading={isDeleteLoading || isChangeLoading}
        />
      </SlicedContentLayout.Section>
    </>
  );
};

export default ItemsSubContentBranding;
