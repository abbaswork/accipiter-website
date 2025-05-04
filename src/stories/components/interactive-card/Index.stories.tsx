import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactiveCard, ReactiveCardProps } from './Index'; // Make sure this path is correct
import './../../../styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/Card/ReactiveCard',
  component: ReactiveCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReactiveCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & ReactiveCardProps) => (
  <div className="page">
    <ReactiveCard {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    bodyText: 'Default body text',
    headerText: 'Default header text',
  },
};