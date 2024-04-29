import { render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useEffectOnce } from '@/shared/lib';

describe('hooks/useEffectOnce', () => {
  test('render useEffectOnce', () => {
    const spy = vi.fn();
    const MockComponent = () => {
      useEffectOnce(() => {
        spy();
      });

      return <div />;
    };

    render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    expect(spy).toBeCalled();
  });
});
