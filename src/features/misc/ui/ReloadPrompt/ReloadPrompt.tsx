import { useRegisterSW } from 'virtual:pwa-register/react';

import { PrimaryButton } from '@/shared/ui/inputs';

import * as S from './ReloadPrompt.styles';

export const ReloadPrompt: React.FC = () => {
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
