import { renderHook } from '@testing-library/react';
import { beforeEach, describe, expect, test, vi } from 'vitest';

import { useMediaQuery } from '@/shared/lib';

describe('hooks/useMediaQuery', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(
      () =>
        ({
          matches: true,
        } as MediaQueryList),
    );
  });

  test('render useMediaQuery', () => {
    const { result } = renderHook((props) => useMediaQuery(props), {
      initialProps: '(max-width: 768px)',
    });

    expect(result.current).toBe(true);
  });
});
