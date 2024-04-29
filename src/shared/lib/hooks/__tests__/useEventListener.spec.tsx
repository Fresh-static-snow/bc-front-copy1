import { act, render } from '@testing-library/react';
import { useEffect, useState } from 'react';
import { beforeEach, describe, expect, test, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { useEventListener } from '@/shared/lib';

describe('hooks/useEventListener', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(() =>
      mock<MediaQueryList>({
        matches: true,
      }),
    );
  });

  test('render useEventListener', () => {
    const spy = vi.fn();

    const MockComponent = () => {
      const [media] = useState('');
      const [, setIsMatch] = useState<boolean>(false);
      const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

      useEffect(() => {
        const list = window.matchMedia(media);
        setMediaQueryList(list);
        setIsMatch(list.matches);
        spy();
      }, []);

      useEventListener(
        'change',
        (event: MediaQueryListEvent) => setIsMatch(event.matches),
        mediaQueryList,
      );

      return <div />;
    };

    render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    act(() => {
      window.matchMedia('(max-width: 768px)').dispatchEvent(new Event('change'));
    });

    expect(spy).toBeCalled();
  });
});
