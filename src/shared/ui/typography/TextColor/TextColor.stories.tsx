import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { TextColor } from './TextColor';

export default {
  title: 'shared/typography/TextColor',
  component: TextColor,
  tags: ['autodocs'],
  argTypes: {
    text: { control: { type: 'text' } },
    fontWeight: {
      options: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
      control: { type: 'select' },
    },
    fontSize: { control: { type: 'text' } },
    baseColor: { control: { type: 'color' } },
    secondaryColor: { control: { type: 'color' } },
    limitedWidth: { control: { type: 'boolean' } },
  },
} as Meta<typeof TextColor>;

type Story = StoryObj<typeof TextColor>;
type StoryTemplate = StoryFn<typeof TextColor>;

export const Simple: Story = {
  args: {
    text: 'Natus Vincere',
    secondaryColor: '#B146C2',
  },
};

export const FontWeight: Story = {
  args: {
    text: 'Natus Vincere',
    fontWeight: '700',
    secondaryColor: '#B146C2',
  },
};

export const FontSize: Story = {
  args: {
    text: 'Natus Vincere',
    fontSize: '20px',
    secondaryColor: '#B146C2',
  },
};

export const BaseColor: Story = {
  args: {
    text: 'Natus Vincere',
    baseColor: '#D1343899',
    secondaryColor: '#B146C2',
  },
};

const Template: StoryTemplate = (args) => (
  <div style={{ width: '60px' }}>
    <TextColor {...args} />
  </div>
);

export const LimitedWidth: Story = {
  render: Template,
  args: {
    text: 'Natus Vincere',
    limitedWidth: true,
    secondaryColor: '#B146C2',
  },
};
