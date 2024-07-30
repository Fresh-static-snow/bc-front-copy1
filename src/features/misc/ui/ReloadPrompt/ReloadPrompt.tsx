import { useRegisterSW } from 'virtual:pwa-register/react';

import { useSessionStorage } from '@/shared/lib';
import { PrimaryButton } from '@/shared/ui/inputs';

import * as S from './ReloadPrompt.styles';

export const ReloadPrompt: React.FC = () => {
  const [, , removeMatchTalents] = useSessionStorage('copied-match-form-talents', null);
  const [, , removeMatchStaff] = useSessionStorage('copied-match-form-staff', null);
  const [, , removeSegmentTalents] = useSessionStorage('copied-segment-form-talents', null);
  const [, , removeSegmentStaff] = useSessionStorage('copied-segment-form-staff', null);

  const {
    needRefresh: [needRefresh],
    updateServiceWorker,
  } = useRegisterSW({
    onRegistered() {
      console.log(`SW Registered`);
    },
    onRegisterError(error) {
      console.log('SW registration error', error);
    },
  });

  const update = () => {
    removeMatchTalents();
    removeMatchStaff();
    removeSegmentTalents();
    removeSegmentStaff();
    updateServiceWorker(true);
  };

  return (
    <>
      {needRefresh && (
        <S.Root>
          <S.Message>New content available, click on reload button to update.</S.Message>

          <PrimaryButton variant="primary" label="Reload" onClick={update} />
        </S.Root>
      )}
    </>
  );
};
