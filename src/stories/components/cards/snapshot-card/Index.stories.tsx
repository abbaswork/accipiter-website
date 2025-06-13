import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SnapshotCard, SnapshotCardProps } from './Index'; // Make sure this path is correct
import '@/styles/pages/global.scss';
import { JSX } from 'react';

const meta = {
  title: 'Components/Cards/Snapshot Card',
  component: SnapshotCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // args: { onClick: fn() },
} satisfies Meta<typeof SnapshotCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & SnapshotCardProps) => (
  <div className="page">
    <SnapshotCard {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    title: 'Case Study Snapshot',
    challange: 'Downtrend in SEO despite best practices.',
    solution: 'Implementation of microservices through AWS and related tech.',
    outcome: '100% increase in SEO performance.',
    tech: [
      {
        name: 'Tech Stack',
        subTech: ['AWS', 'Docker', 'Kubernetes', 'Node.js', 'React'],
      },
      {
        name: 'Sub Tech',
        subTech: ['GraphQL', 'REST APIs', 'CI/CD', 'Monitoring'],
      },
    ],
    cta: { label: 'Read More', link: '#' },
  },
};