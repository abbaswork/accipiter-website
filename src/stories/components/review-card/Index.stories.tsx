import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReviewCard, ButtonProps } from './Index'; // Make sure this path is correct
import './../../../styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/Card/ReviewCard',
  component: ReviewCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <div className="page">
    <ReviewCard {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering

};