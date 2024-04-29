import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { EntityTemplatesKeys } from '@/features/management';

import { entityContentTemplates } from '../../const';
import { Body } from './ui/Body/Body';

const SubContentSimpleItems: React.FC = () => {
  const location = useLocation();

  const match = matchPath('/management/:items/active/entity/:type', location.pathname);
  const activeTemplate = useMemo(
    () => entityContentTemplates[match?.params?.type as EntityTemplatesKeys],
    [match?.params?.type],
  );

  return <>{!!activeTemplate && <Body activeTemplate={activeTemplate} />}</>;
};

export default SubContentSimpleItems;
