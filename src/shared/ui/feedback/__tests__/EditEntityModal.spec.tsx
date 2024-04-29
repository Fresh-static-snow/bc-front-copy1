import { render } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { editFormTemplates } from '@/widgets/desktop/ui/CalendarDatesMenu/ui/Menu/Menu.const';

import { EditEntityModal } from '..';

describe('ui/EditEntityModal', () => {
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

  it('render EditEntityModal', () => {
    const setRequestType = vi.fn();
    const { getByText } = render(
      <TestProvider>
        <EditEntityModal
          formTemplates={editFormTemplates}
          requestType={{ label: 'discipline', value: 'discipline' }}
          setRequestType={setRequestType}
        />
      </TestProvider>,
    );

    expect(getByText('discipline')).toBeVisible();
    expect(setRequestType).toBeCalled();
  });
});
