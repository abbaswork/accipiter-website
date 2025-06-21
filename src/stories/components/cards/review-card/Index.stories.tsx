import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import {Carousel} from './Index'; // Make sure this path is correct
import '@/styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/Card/Carousel',
  component: Carousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes) => (
  <div className="page">
    <Carousel {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  
};