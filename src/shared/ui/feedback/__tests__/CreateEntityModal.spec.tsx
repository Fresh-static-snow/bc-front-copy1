import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { requestButtons } from '@/widgets/desktop/ui/CalendarDatesMenu/const';
import { editFormTemplates } from '@/widgets/desktop/ui/CalendarDatesMenu/ui/Menu/Menu.const';

import { CreateEntityModal } from '..';

describe('ui/CreateEntityModal', () => {
  vi.mock('@/shared/api', async () => {
    const actualModule = await vi.importActual<typeof import('@/shared/api')>('@/shared/api');
    const mockedModule: DeepPartial<typeof import('@/shared/api')> = {
      ...actualModule,
      axiosInstance: {
        delete: vi.fn(),
        get: vi.fn(),
        post: vi.fn(),
        patch: vi.fn(),
        put: vi.fn(),
        interceptors: {
          response: {
            use: vi.fn(),
          },
        },
      },
    };

    return mockedModule;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CreateEntityModal', () => {
    const setRequestType = vi.fn();
    const { getByText } = render(
      <TestProvider>
        <CreateEntityModal
          formTemplates={editFormTemplates}
          requestType={{ label: 'discipline', value: 'discipline' }}
          setRequestType={setRequestType}
          requestButtons={requestButtons}
        />
      </TestProvider>,
    );

    expect(getByText('discipline')).toBeVisible();
    expect(setRequestType).toBeCalled();
  });
});
