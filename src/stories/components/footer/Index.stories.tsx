import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Footer, FooterProps } from './Index'; // Make sure this path is correct
import './../../../styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story['render'] = (args) => (
  <div className="page">
    <Footer {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {

  },
  parameters: {
    layout: 'fullscreen',
  },
};