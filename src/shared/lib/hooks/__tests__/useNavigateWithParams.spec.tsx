import { fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, test, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useCustomSearchParams, useNavigateWithParams } from '@/shared/lib';
import { filterParamsWithUser } from '@/widgets/desktop';

import { UseCustomSearchParams } from '../useCustomSearchParams/useCustomSearchParams.types';

vi.mock('../useCustomSearchParams/useCustomSearchParams.hook');

describe('hooks/useNavigateWithParams', () => {
  afterEach(() => {
    vi.clearAllMocks();
    vi.restoreAllMocks();
  });

  test('render useNavigateWithParams', () => {
    vi.mocked(useCustomSearchParams).mockReturnValue({
      paramsString: 'string',
    } as UseCustomSearchParams);
    const spy = vi.fn();

    const MockComponent = () => {
      const navigate = useNavigateWithParams(filterParamsWithUser);

      return (
        <button
          type="button"
          onClick={() => {
            spy();
            navigate('/?current_user');
          }}
        >
          click
        </button>
      );
    };

    const { getByText } = render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    fireEvent.click(getByText('click'));
    expect(spy).toBeCalled();
  });

  test('render useNavigateWithParams with no params', () => {
    vi.mocked(useCustomSearchParams).mockReturnValue({} as UseCustomSearchParams);
    const spy = vi.fn();

    const MockComponent = () => {
      const navigate = useNavigateWithParams();

      return (
        <button
          type="button"
          onClick={() => {
            navigate('/');
            spy();
          }}
        >
          click
        </button>
      );
    };

    const { getByText } = render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );

    fireEvent.click(getByText('click'));
    expect(spy).toBeCalled();
  });
});
