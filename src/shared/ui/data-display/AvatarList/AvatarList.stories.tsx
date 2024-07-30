import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { AvatarList } from './AvatarList';

export default {
  title: 'shared/data-display/AvatarList',
  component: AvatarList,
  tags: ['autodocs'],
  argTypes: {
    color: { control: { type: 'color' } },
    people: { control: { type: null } },
    avatarSize: { control: { type: 'number' } },
    position: { control: { type: 'select', options: ['left', 'center', 'right'] } },
    filterList: {
      control: { type: null },
    },
  },
} as Meta<typeof AvatarList>;

type Story = StoryObj<typeof AvatarList>;
type StoryTemplate = StoryFn<typeof AvatarList>;

const Template: StoryTemplate = (args) => (
  <div style={{ width: '200px', background: '#f0f0f0', padding: '15px' }}>
    <AvatarList {...args} />
  </div>
);

export const Simple: Story = {
  render: Template,
  args: {
    color: '#000',
    people: [
      { id: 1, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 2, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 3, name: 'Kathryn Sexton', image: '' },
      { id: 4, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 5, name: 'Kathryn Sexton', image: '' },
      { id: 6, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 7, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 8, name: 'Kathryn Sexton', image: '' },
      { id: 9, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 10, name: 'Kathryn Sexton', image: '' },
      { id: 11, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 12, name: 'Kathryn Sexton', image: '' },
      { id: 13, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 14, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 15, name: 'Kathryn Sexton', image: '' },
      { id: 16, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
      { id: 17, name: 'Kathryn Sexton', image: '' },
    ],
  },
  parameters: {
    docs: {
      source: {
        code: `
<AvatarList
  color="#000"
  people={[
    { id: 1, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 2, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 3, name: 'Kathryn Sexton', image: '' },
    { id: 4, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 5, name: 'Kathryn Sexton', image: '' },
    { id: 6, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 7, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 8, name: 'Kathryn Sexton', image: '' },
    { id: 9, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 10, name: 'Kathryn Sexton', image: '' },
    { id: 11, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 12, name: 'Kathryn Sexton', image: '' },
    { id: 13, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 14, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 15, name: 'Kathryn Sexton', image: '' },
    { id: 16, name: 'Kathryn Sexton', image: 'https://picsum.photos/200' },
    { id: 17, name: 'Kathryn Sexton', image: '' },
  ]}
/>
        `,
      },
    },
  },
};

export const Centered: Story = {
  render: Template,
  args: {
    color: '#000',
    people: [
      { id: 1, name: 'John Doe', image: 'https://picsum.photos/200' },
      { id: 2, name: 'Jane Doe', image: 'https://picsum.photos/200' },
    ],
    position: 'center',
  },
};

export const WithCrownIcons: Story = {
  render: Template,
  args: {
    color: '#000',
    people: [
      { id: 1, name: 'John Doe', image: 'https://picsum.photos/200', crownIcon: true },
      { id: 2, name: 'Jane Doe', image: 'https://picsum.photos/200', crownIcon: true },
    ],
  },
};

export const WithAdditionalBorders: Story = {
  render: Template,
  args: {
    color: '#000',
    people: [
      { id: 1, name: 'John Doe', image: 'https://picsum.photos/200', additionalBorder: true },
      { id: 2, name: 'Jane Doe', image: 'https://picsum.photos/200', additionalBorder: true },
    ],
  },
};

export const CustomSize: Story = {
  render: Template,
  args: {
    color: '#000',
    people: [
      { id: 1, name: 'John Doe', image: 'https://picsum.photos/200' },
      { id: 2, name: 'Jane Doe', image: 'https://picsum.photos/200' },
    ],
    avatarSize: 50,
  },
};

export const Filtered: Story = {
  render: Template,
  args: {
    color: '#000',
    people: [
      { id: '1', name: 'John Doe', image: 'https://picsum.photos/200', crownIcon: true },
      { id: '2', name: 'Jane Doe', image: 'https://picsum.photos/200' },
      { id: '3', name: 'Jane Roe', image: 'https://picsum.photos/200', additionalBorder: true },
    ],
    filterList: ['1', '2'],
  },
};
