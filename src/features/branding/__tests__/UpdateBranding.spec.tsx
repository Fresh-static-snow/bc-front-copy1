import { faker } from '@faker-js/faker';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';
import { Branding } from '@/shared/types/entities.types';

import { UpdateBranding } from '..';

vi.mock('@/entities/branding', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/branding')>(
    '@/entities/branding',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/branding')> = {
    ...actualModule,
    useUpdateBranding: () =>
      mock({
        mutateAsync: vi.fn(),
      }),
    useGetBrandingForm: () =>
      mock({
        data: { favicon: { url: '' }, id: 1, visible: true, name: 'test' } as Branding,
        isLoading: false,
        isFetching: false,
        isSuccess: true,
      }),
  };

  return mockedModule;
});

describe('features/branding/UpdateBranding', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render UpdateBranding', async () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <UpdateBranding
          setEntityModal={vi.fn()}
          requestType={{ label: 'Lorem', value: 'Lorem', additional: '1' }}
        />
      </TestProvider>,
    );

    const imageUrl = faker.image.url();
    const imageFile = await fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const mockFile = new File([blob], 'test.png', { type: 'image/png' });
        return mockFile;
      });

    fireEvent.input(getByTestId('PrimaryInput-name'), { target: { value: 'Artem' } });
    await waitFor(() =>
      fireEvent.change(getByTestId('PrimaryDropzone-logo'), {
        target: { files: [imageFile] },
      }),
    );
    expect(getByTestId('PrimaryInput-name')).toHaveValue('Artem');
    expect(getByText('Update')).toBeVisible();

    fireEvent.click(getByText('Update'));
  });
});
