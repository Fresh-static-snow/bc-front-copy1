import { Modal } from '@/shared/ui/feedback';
import { AvatarCropper } from '@/shared/ui/inputs';

import * as S from './AvatarEditModal.styles';
import { AvatarEditModalProps } from './AvatarEditModal.types';

export const AvatarEditModal: React.FC<AvatarEditModalProps> = ({
  avatarFile,
  onClose,
  onUpdateAvatar,
}) => (
  <Modal isOpen={!!avatarFile} onClose={onClose} maxWidth="800px">
    <S.Header>Crop your new profile picture</S.Header>

    <AvatarCropper image={avatarFile} onCancel={onClose} onUpdateAvatar={onUpdateAvatar} />
  </Modal>
);
