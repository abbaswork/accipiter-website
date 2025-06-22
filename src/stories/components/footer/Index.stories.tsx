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
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & FooterProps) => (
  <div className="page">
    <Footer {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    links: [
      { label: 'Contact Us', url: '/contact' },
      { label: 'About', url: '/about' },
      { label: 'Privacy Policy', url: '/privacy' },
    ],
    socialLinks: [
      { label: 'Facebook', url: "#" },
      { label: 'Twitter', url: "#" },
      { label: 'LinkedIn', url: "#" },
      // { label: 'GitHub', url: 'https://github.com' },
      { label: 'Instagram', url: "#" },
    ],
    logo: {
      src: '/logo.svg',
      alt: 'Logo',
    },
    copyright: `© ${new Date().getFullYear()} Accipiter Tech Consulting. All rights
        reserved.`
  },
};