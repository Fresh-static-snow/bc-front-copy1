import { Fragment, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { useGetManagementItems } from '@/entities/management';
import { CircularLoader } from '@/shared/ui/feedback';

import { entityItemsMapping } from './Menu.const';
import * as S from './Menu.styles';
import { Item } from './Menu.types';
import { AccordionList } from './ui/AccordionList/AccordionList';
import { SimpleItem } from './ui/SimpleItem/SimpleItem';

export const Menu: React.FC = () => {
  const { pathname } = useLocation();

  const { data: managementItemsData, isLoading: isLoadingItems } = useGetManagementItems();

  const hasActivePath = useCallback(
    (items: Item[]) => items?.some(({ path }) => pathname.includes(path)),
    [pathname],
  );

  return (
    <S.Root>
      <S.Lists>
        {entityItemsMapping.map(({ key, label, path, items }) =>
          path ? (
            <Fragment key={key}>
              {typeof managementItemsData?.[key] === 'number' && (
                <SimpleItem linkPath={path} count={managementItemsData?.[key] as number}>
                  <span>{label}</span>
                </SimpleItem>
              )}
            </Fragment>
          ) : (
            <Fragment key={key}>
              {typeof managementItemsData?.['Deleted items']?.count === 'number' && (
                <AccordionList
                  title={label}
                  count={managementItemsData?.[key]?.count as number}
                  defaultExpandedStatus={hasActivePath(items)}
                >
                  {items?.map(({ key: nestedKey, label: nestedLabel, path: nestedPath }) => (
                    <Fragment key={key + nestedKey}>
                      {typeof managementItemsData?.[key]?.items?.[nestedKey] === 'number' && (
                        <SimpleItem
                          linkPath={nestedPath}
                          count={managementItemsData?.[key]?.items?.[nestedKey] as number}
                          padding="15px 24px 15px 50px"
                          fontWeight="400"
                        >
                          <span>{nestedLabel}</span>
                        </SimpleItem>
                      )}
                    </Fragment>
                  ))}
                </AccordionList>
              )}
            </Fragment>
          ),
        )}

        {isLoadingItems && <CircularLoader size="24px" width="100%" padding="8px" />}
      </S.Lists>
    </S.Root>
  );
};
