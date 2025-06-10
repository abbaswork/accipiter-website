import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SnapshotCard, CardProps } from './Index'; // Make sure this path is correct
import '@/styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/Cards/Card',
  component: SnapshotCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof SnapshotCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & CardProps) => (
  <div className="page">
    <SnapshotCard {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    headerText: 'default header',
    subHeaderText: 'default sub header',
    cardType: 'Metric Gamer',
  },
};