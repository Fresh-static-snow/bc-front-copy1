import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import { TestProvider } from '@/app/__tests__';
import { IconSliderSvg } from '@/shared/assets';

import { PrimaryButton } from '..';

describe('ui/PrimaryButton', () => {
  test('render PrimaryButton', () => {
    const buttonText = 'Lorem ipsum';

    const primaryButtonScreen = render(
      <TestProvider>
        <PrimaryButton label={buttonText} />
      </TestProvider>,
    );

    expect(primaryButtonScreen.getByText(buttonText)).toBeVisible();
  });

  test('render PrimaryButton with props', () => {
    const buttonText = 'Lorem ipsum';

    const primaryButtonScreen = render(
      <TestProvider>
        <PrimaryButton
          disabled
          label={buttonText}
          isLoading
          IconComponent={IconSliderSvg}
          AdditionalComponent={<div />}
        />
        <PrimaryButton contentPosition="between" variant="base" />
        <PrimaryButton
          contentPosition="center"
          variant="custom"
          customStyles={{ color: '#fff', borderColorActive: '#fff' }}
        />
        <PrimaryButton contentPosition="left" variant="mixed" />
        <PrimaryButton contentPosition="right" variant="outlined" />
        <PrimaryButton contentPosition="right" variant="primary" />
        <PrimaryButton contentPosition="right" variant="secondary" />
        <PrimaryButton
          contentPosition="right"
          variant="custom"
          disabled
          customStyles={{
            iconColor: '#fff',
            colorActive: '#fff',
            backgroundColorDisabled: '#fff',
            colorDisabled: '#fff',
            disabledOpacity: '1',
            iconColorDisabled: '#',
            borderColorHovered: '#fff',
            backgroundColorHovered: '#fff',
            colorHovered: '#fff',
            iconColorHovered: '#',
            backgroundColorActive: '#fff',
            iconColorActive: '#fff',
            borderColorDisabled: '#ff',
          }}
        />
      </TestProvider>,
    );

    expect(primaryButtonScreen.getByText(buttonText)).toBeVisible();
  });
});
