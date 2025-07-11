import type { Meta, StoryObj } from "@storybook/react";
import { CardRow, CardRowProps } from "./Index"; // Make sure this path is correct
import "@/styles/pages/global.scss";
import { JSX } from "react";

const meta = {
  title: "Components/Cards/Card Row",
  component: CardRow,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CardRow>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & CardRowProps) => (
  <div className="page">
    <CardRow {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    sectionTitle: "Case Studies",
    cards: [
      {
        headerText: "Metric Gamer",
        subHeaderText: "Coming Soon",
        cardType: "Metric Gamer",
      },
    ],
  },
};
