import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

export default {
  title: 'ui/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    image: { control: 'text' },
    size: { control: 'text' },
    fontSize: { control: 'text' },
    fontWeight: { control: 'text' },
    backgroundColor: { control: 'color' },
    borderColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Name: Story = {
  args: {
    name: 'Kathryn Sexton',
    backgroundColor: '#6E7380',
  },
};

export const Image: Story = {
  args: {
    name: 'Kathryn Sexton',
    size: '40px',
    image: 'https://picsum.photos/200',
  },
};

export const Size: Story = {
  args: {
    name: 'Kathryn Sexton',
    backgroundColor: '#6E7380',
    size: '40px',
  },
};

export const Font: Story = {
  args: {
    name: 'Kathryn Sexton',
    backgroundColor: '#6E7380',
    size: '40px',
    fontSize: '24px',
    fontWeight: '600',
    textColor: '#F4252D',
  },
};

export const Background: Story = {
  args: {
    name: 'Kathryn Sexton',
    backgroundColor: '#FDE300',
    size: '40px',
    fontSize: '24px',
    fontWeight: '600',
    textColor: '#F4252D',
  },
};

export const Border: Story = {
  args: {
    name: 'Kathryn Sexton',
    backgroundColor: '#FDE300',
    borderColor: '#F4252D',
    size: '40px',
    fontSize: '24px',
    fontWeight: '600',
    textColor: '#F4252D',
  },
};
