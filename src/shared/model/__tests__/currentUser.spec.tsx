import { act, renderHook } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { useAuthStore } from '@/shared/model/auth/auth.store';

describe('stores/useAuthStore', () => {
  test('render useAuthStore and set user', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => result.current.setAuthedUser(mock()));

    expect(result.current.authedUser).toBeDefined();
  });

  test('render useAuthStore and set user permissions', () => {
    const { result } = renderHook(() => useAuthStore());

    act(() => result.current.setAuthPermissions(mock()));

    expect(result.current.setAuthPermissions).toBeDefined();
  });
});
