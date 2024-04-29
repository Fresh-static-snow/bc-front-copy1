import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useSize } from '@/shared/lib';

import { AvatarList } from '..';

describe('ui/AvatarList', () => {
  beforeEach(() => {
    const ResizeObserver = vi.fn(() => ({
      disconnect: vi.fn(),
      observe: vi.fn(),
      takeRecords: vi.fn(),
      unobserve: vi.fn(),
    }));

    vi.stubGlobal('ResizeObserver', ResizeObserver);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render AvatarList', () => {
    const people = [
      { id: 1, image: '', name: 'Lorem ipsum' },
      { id: 2, image: '', name: 'Lorem ipsum2' },
    ];

    const avatarListScreen = render(
      <TestProvider>
        <AvatarList color="#fff" people={people} />
      </TestProvider>,
    );

    expect(avatarListScreen.getByText('+2')).toBeVisible();
  });

  it('render AvatarList with props', () => {
    vi.mock('@/shared/lib');
    vi.mocked(useSize).mockImplementation(() => ({
      bottom: 0,
      left: 0,
      height: 0,
      right: 0,
      top: 0,
      width: 300,
      x: 0,
      y: 0,
      toJSON: vi.fn(),
    }));

    const oneAvatar = { id: 1, image: '', name: 'Lorem ipsum' };
    const people = new Array(99).fill(oneAvatar).map((value, index) => ({
      id: Number(index) + 1,
      image: '',
      name: String(value.name) + String(index),
    }));
    const people2 = new Array(200).fill(oneAvatar).map((value, index) => ({
      id: Number(index) + 1,
      image: '',
      name: String(value.name) + String(index),
    }));

    const avatarListScreen = render(
      <TestProvider>
        <div style={{ width: 300 }}>
          <AvatarList filterList={[]} color="#fff" people={people} position="center" />
          <AvatarList color="#fff" people={[]} position="center" />
          <AvatarList color="#fff" people={[oneAvatar]} position="center" />
          <AvatarList color="#fff" people={people2} position="center" />
        </div>
      </TestProvider>,
    );

    expect(avatarListScreen.getByText('+88')).toBeVisible();
  });

  it('render AvatarList with overflow', () => {
    vi.mock('@/shared/lib');
    vi.mocked(useSize).mockImplementation(() => ({
      bottom: 0,
      left: 0,
      height: 0,
      right: 0,
      top: 0,
      width: 24,
      x: 0,
      y: 0,
      toJSON: vi.fn(),
    }));

    const people = [
      { id: 1, image: '', name: 'Lorem ipsum' },
      { id: 2, image: '', name: 'Lorem ipsum2' },
    ];

    const avatarListScreen = render(
      <TestProvider>
        <div style={{ width: 24 }}>
          <AvatarList color="#fff" people={people} position="center" />
        </div>
      </TestProvider>,
    );
    expect(avatarListScreen.getByText('+2')).toBeVisible();
  });
});
