import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { PrimaryCTA, PrimaryCTAProps } from "./Index"; // Make sure this path is correct
import "@/styles/pages/global.scss";
import { JSX } from "react";

const meta = {
  title: "Components/CTA/Primary CTA",
  component: PrimaryCTA,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // args: { onClick: fn() },
} satisfies Meta<typeof PrimaryCTA>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & PrimaryCTAProps) => (
  <div style={{ backgroundColor: "#000" }}>
  <PrimaryCTA {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    label: "Book a Consultation",
    link: "#",
  },
};
