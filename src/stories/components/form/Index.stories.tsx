import type { Meta, StoryObj } from '@storybook/react';
import { HubSpotForm } from './Index'; // Make sure this path is correct
import './../../../styles/pages/global.scss';

const meta = {
  title: 'Components/Form',
  component: HubSpotForm,
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof HubSpotForm>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: React.ComponentProps<typeof HubSpotForm>) => (
  <div className="page">
    <HubSpotForm {...args} />
  </div>
);

export const Primary: Story = {
  render: Template,
};