import { useState } from 'react';

import { AvatarButton } from './ui/AvatarButton/AvatarButton';
import { ContentDrawer } from './ui/ContentDrawer/ContentDrawer';

export const Menu = () => {
  const [isOpenContentDrawer, setOpenContentDrawer] = useState(false);

  return (
    <>
      <ContentDrawer
        isOpenContentDrawer={isOpenContentDrawer}
        setOpenContentDrawer={setOpenContentDrawer}
      />

      <AvatarButton setOpenContentDrawer={setOpenContentDrawer} />
    </>
  );
};
