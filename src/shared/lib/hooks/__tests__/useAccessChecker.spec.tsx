import { act, renderHook } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { useHasAccess } from '@/shared/lib';
import { useAuthStore } from '@/shared/model/auth/auth.store';

describe('hooks/useAccessChecker', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render useHasAccess default value', () => {
    const { result } = renderHook(() => useHasAccess(['test'], 'some'));

    expect(result.current).toBe(false);
  });

  test('render useHasAccess with no required permissions', () => {
    const { result: storeResult } = renderHook(() => useAuthStore((s) => s));

    act(() => {
      storeResult.current.setAuthPermissions({
        permissions: { test: { allowed_routes: [''], deny: [], grant: ['all'] } },
        routes: [],
      });
    });

    const { result } = renderHook(() => useHasAccess([], 'some'));

    expect(result.current).toBe(true);
  });

  test('render useHasAccess with some required permissions', () => {
    const { result: storeResult } = renderHook(() => useAuthStore((s) => s));

    act(() => {
      storeResult.current.setAuthPermissions({
        permissions: { test: { allowed_routes: ['test_route'], deny: [], grant: ['all'] } },
        routes: ['test_route'],
      });
    });

    const { result } = renderHook(() => useHasAccess(['test_route'], 'some'));

    expect(result.current).toBe(true);
  });

  test('render useHasAccess with every required permissions', () => {
    const { result: storeResult } = renderHook(() => useAuthStore((s) => s));

    act(() => {
      storeResult.current.setAuthPermissions({
        permissions: { test: { allowed_routes: ['test_route'], deny: [], grant: ['all'] } },
        routes: ['test_route'],
      });
    });

    const { result } = renderHook(() => useHasAccess(['test_route'], 'every'));

    expect(result.current).toBe(true);
  });

  test('render useHasAccess with failed permissions', () => {
    const { result: storeResult } = renderHook(() => useAuthStore((s) => s));

    act(() => {
      storeResult.current.setAuthPermissions({
        permissions: { test: { allowed_routes: ['test_route'], deny: [], grant: ['all'] } },
        routes: ['test_route'],
      });
    });

    const { result } = renderHook(() => useHasAccess(['no_access'], '' as 'some' | 'every'));

    expect(result.current).toBe(false);
  });
});
