import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReviewCards, CardProps } from './Index'; // Make sure this path is correct
import './../../../styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/Card/ReviewCard',
  component: ReviewCards,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ReviewCards>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & CardProps) => (
  <div className="page">
    <ReviewCards {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    gradientText: 'Sample Gradient',
    heroText: 'Sample Hero',
    subText: 'Sample Subtext',
    centerCard: false,
    authorText: 'Sample Author Text',
  },
};