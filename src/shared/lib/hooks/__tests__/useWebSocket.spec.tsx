import { Consumer, createConsumer } from '@rails/actioncable';
import { render } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest';
import { mock, mockDeep } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { useWebSocket } from '@/shared/lib';

vi.mock('@rails/actioncable');

describe('hooks/useWebSocket', () => {
  const spy: Consumer['subscriptions']['create'] = vi.fn(() => mockDeep());

  beforeEach(() => {
    vi.mocked(createConsumer).mockReturnValue(
      mockDeep<Consumer>({
        subscriptions: mock<Consumer['subscriptions']>({
          create: spy,
        }),
      }),
    );
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  test('render useWebSocket enabled', () => {
    const MockComponent = () => {
      useWebSocket({
        enabled: true,
        webSocketURL: import.meta.env.VITE_WEBSOCKET_BASE_URL ?? 'ws://localhost:3000/cable',
        subscriptionOptions: {
          channel: 'NotifyCalendarChannel',
        },
        queryKeys: [''],
        invalidationKeys: [''],
        queryCallback: () => () => {},
      });

      return <div />;
    };

    render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    expect(spy).toBeCalledTimes(1);
  });

  test('render useWebSocket not enabled', () => {
    vi.mocked(createConsumer).mockReturnValue(
      mockDeep<Consumer>({
        subscriptions: mock<Consumer['subscriptions']>({
          create: spy,
        }),
      }),
    );

    const MockComponent = () => {
      useWebSocket({
        enabled: false,
        webSocketURL: import.meta.env.VITE_WEBSOCKET_BASE_URL ?? 'ws://localhost:3000/cable',
        subscriptionOptions: {
          channel: 'NotifyCalendarChannel',
        },
        queryKeys: [''],
        invalidationKeys: [''],
        queryCallback: () => () => {},
      });

      return <div />;
    };

    render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    expect(spy).toBeCalledTimes(0);
  });
});
