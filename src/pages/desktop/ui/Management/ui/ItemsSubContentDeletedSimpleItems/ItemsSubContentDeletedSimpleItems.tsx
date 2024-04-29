import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import { deletedEntityContentTemplates } from '../../const';
import { DeletedEntityTemplatesKeys } from '../../types';
import { Body } from './ui/Body/Body';

const ItemsSubContentDeletedSimpleItems: React.FC = () => {
  const location = useLocation();

  const match = matchPath('/management/:items/deleted/entity/:type', location.pathname);
  const activeTemplate = useMemo(
    () => deletedEntityContentTemplates[match?.params?.type as DeletedEntityTemplatesKeys],
    [match?.params?.type],
  );

  return <>{!!activeTemplate && <Body activeTemplate={activeTemplate} />}</>;
};

export default ItemsSubContentDeletedSimpleItems;
