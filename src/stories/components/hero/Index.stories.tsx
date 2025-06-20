import type { Meta, StoryObj } from '@storybook/react';
import { Hero, HeroProps } from './Index'; // Make sure this path is correct
import './../../../styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Hero/Hero',
  component: Hero,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & HeroProps) => (
  <div className="page">
    <Hero {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    title: 'Use Case Hero Title with <span> Gradient </span> Text',
    logoBarImage: '/logo-bar.svg',
  },
};