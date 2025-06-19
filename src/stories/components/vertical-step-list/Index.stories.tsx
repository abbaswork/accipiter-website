import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { VerticalStepList, ButtonProps } from './Index'; // Make sure this path is correct
import './../../../styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/VerticalStepList',
  component: VerticalStepList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof VerticalStepList>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & ButtonProps) => (
  <div className="page" style={{ width: '100%', height: '100%', backgroundColor: 'black'}}>
    <VerticalStepList {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
};