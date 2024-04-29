import { useCallback, useRef } from 'react';
import { Scrollbar as CustomScrollbar } from 'react-scrollbars-custom';
import { ScrollState } from 'react-scrollbars-custom/dist/types/types';

import { useDebounce, useSize } from '@/shared/lib';

import * as S from './InfinityScrollbar.styles';
import { InfinityScrollbarProps } from './InfinityScrollbar.types';

/**
 * The component that wraps the content and adds a scrollbar to it with infinity scroll and opportunity to fetch next page.
 * For correct work, it is necessary to set the height of the parent element.
 */
export const InfinityScrollbar: React.FC<InfinityScrollbarProps> = ({
  children,
  active = true,
  noScrollX = true,
  noScrollY,
  disableTracksWidthCompensation = true,
  canFetchNextPage = false,
  fetchNextPage,
}) => {
  const scrollerRef = useRef(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const contentWrapperSize = useSize(contentWrapperRef);
  const contentSize = useSize(contentRef);

  const onGetMorePages = useCallback(
    (values: ScrollState) => {
      const { scrollTop, scrollHeight, clientHeight } = values;

      if (scrollTop + clientHeight >= scrollHeight - 100 && canFetchNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, canFetchNextPage],
  );

  useDebounce(
    () => {
      if (canFetchNextPage && contentWrapperSize?.height !== contentSize?.height) {
        fetchNextPage();
      }
    },
    100,
    [fetchNextPage, canFetchNextPage, contentWrapperSize?.height, contentSize?.height],
  );

  if (!active) {
    return <>{children}</>;
  }

  return (
    <S.Scrollbar>
      <CustomScrollbar
        ref={scrollerRef}
        noScrollX={noScrollX}
        noScrollY={noScrollY}
        disableTracksWidthCompensation={disableTracksWidthCompensation}
        onScroll={
          onGetMorePages as React.UIEventHandler<HTMLDivElement> &
            ((scrollValues: ScrollState, prevScrollState?: ScrollState) => void)
        }
        contentProps={{
          renderer: (props) => {
            const { elementRef, ...restProps } = props;
            return (
              <div
                {...restProps}
                ref={(node) => {
                  elementRef(node);
                  contentWrapperRef.current = node;
                }}
              />
            );
          },
        }}
      >
        <div ref={contentRef}>{children}</div>
      </CustomScrollbar>
    </S.Scrollbar>
  );
};
