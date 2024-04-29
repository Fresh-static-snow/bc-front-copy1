import { faker } from '@faker-js/faker';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { DeepPartial } from 'react-hook-form';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { mock } from 'vitest-mock-extended';

import { TestProvider } from '@/app/__tests__';

import { CreateBranding } from '..';

vi.mock('@/entities/branding', async () => {
  const actualModule = await vi.importActual<typeof import('@/entities/branding')>(
    '@/entities/branding',
  );
  const mockedModule: DeepPartial<typeof import('@/entities/branding')> = {
    ...actualModule,
    useCreateBranding: () =>
      mock({
        mutateAsync: vi.fn(),
        isLoading: false,
      }),
  };

  return mockedModule;
});

describe('features/branding/CreateBranding', () => {
  beforeEach(() => {
    window.open = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('render CreateBranding', async () => {
    const { getByText, getByTestId } = render(
      <TestProvider>
        <CreateBranding setEntityModal={vi.fn()} />
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
    fireEvent.click(getByText('Create'));
  });
});
