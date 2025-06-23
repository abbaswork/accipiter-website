import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { VerticalStepList, VerticalStepListProps } from "./Index"; // Make sure this path is correct
import "./../../../styles/pages/global.scss";
import { JSX } from "react";

const meta = {
  title: "Components/VerticalStepList",
  component: VerticalStepList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof VerticalStepList>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & VerticalStepListProps) => (
  <div
    className="page"
    style={{ width: "100%", height: "100%", backgroundColor: "black" }}
  >
    <VerticalStepList {...args} />
  </div>
);

export const VerticalStepListStory: Story = {
  render: Template,
  args: {
    sectionTitle: "Our Approach",
    steps: [
      { headerText: "Phased Migration", subheaderText: "Accipiter Tech’s phased migration approach minimizes downtime and risk by breaking projects into manageable stages. This ensures both business continuity thorough testing, and seamless transition so your team stays productive and your value is preserved every step of the way." },
      { headerText: "Rollback Strategies", subheaderText: "Accipiter Tech builds every headless migration with robust rollback strategies, so you can instantly revert to previous versions if needed. This safety net means any content or system change can be undone with minimal disruption, giving you full confidence to innovate without risk." },
      { headerText: "Change Management", subheaderText: "Our structured change management process keeps your team engaged and confident throughout any transformation. With clear communication, hands-on training, and ongoing support, we ensure new systems are adopted smoothly and your team are set up to thrive." },
       { headerText: "Security By Design", subheaderText: "Security is built into every layer from the start. We embed best practices, strict access controls, and continuous monitoring throughout development, proactively protecting your data and reputation while meeting compliance requirements—so you can innovate with confidence." },
    ],
  },
};
