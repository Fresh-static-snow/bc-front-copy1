import { memo } from 'react';

import { IconChevronLeftSvg } from '@/shared/assets';
import { Rotate } from '@/shared/ui/layouts';

export const PopupIcon: React.FC = memo(() => (
  <Rotate rotateDeg={270}>
    <IconChevronLeftSvg data-testid="PopupIcon-icon" />
  </Rotate>
));
