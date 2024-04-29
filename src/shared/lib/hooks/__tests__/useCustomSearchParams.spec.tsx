import { render } from '@testing-library/react';
import { useEffect } from 'react';
import { describe, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { useCustomSearchParams } from '@/shared/lib';

describe('hooks/useCustomSearchParams', () => {
  test('render useCustomSearchParams', () => {
    const MockComponent = () => {
      const params = useCustomSearchParams(['test_param1', 'test_param2', 'test_param6']);

      useEffect(() => {
        params.setParam('test_param54', 'c');
        params.setParam('test_param4', 'c');
        params.setParam('test_param1', 'c');
        params.updateArrayParamValue('test_param4', '1');
        params.updateArrayParamValue('test_param1', '1');
        params.setArrayParams('test_param3', ['a', 'b']);
        params.setArrayParams('test_param1', ['a', 'b']);
        params.removeArrayParam('test_param1', '1');
        params.removeArrayParam('test_param2', '1');
        params.removeArrayParam('not_exist_param', '1');
        params.removeParam('test_param6');
        params.removeParam('test_param7');
        params.clearParams(false);
      }, []);

      return <div />;
    };

    render(
      <TestProvider>
        <MockComponent />
      </TestProvider>,
    );
  });
});
