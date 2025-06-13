import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { UsecaseHero, UsecaseHeroProps } from './Index'; // Make sure this path is correct
import './../../../styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Hero/Usecase Hero',
  component: UsecaseHero,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof UsecaseHero>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & UsecaseHeroProps) => (
  <div className="page">
    <UsecaseHero {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    title: 'Use Case Hero Title',
    authorName: 'John Doe',
    authorPosition: 'Software Engineer',
    authorImage: '/author-icon.svg', // Example image path
    onClick: fn(),
  },
};