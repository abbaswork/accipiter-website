import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Card, ButtonProps } from './card'; // Make sure this path is correct
import './../../../styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/Card/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <div className="page">
    <Card {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    primary: true,
    label: 'Button',
  },
};