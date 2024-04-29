import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { useToggle } from '@/shared/lib';

describe('hooks/useToggle', () => {
  test('render useToggle default value', () => {
    const {
      result: {
        current: [open],
      },
    } = renderHook((props) => useToggle(props), { initialProps: true });

    expect(open).toBe(true);
  });

  test('render useToggle with toggle value', () => {
    const { result } = renderHook((props) => useToggle(props), { initialProps: true });

    act(() => result.current[1](false));

    expect(result.current[0]).toBe(false);
  });
});
