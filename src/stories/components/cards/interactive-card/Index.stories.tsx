import type { Meta, StoryObj } from "@storybook/react";
import { ReactiveCard, ReactiveCardProps, ProgressRingProps } from "./Index"; // Make sure this path is correct
import "@/styles/pages/global.scss";
import { JSX } from "react";

const meta = {
  title: "Components/Cards/ReactiveCard",
  component: ReactiveCard,
} satisfies Meta<typeof ReactiveCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: JSX.IntrinsicAttributes & ReactiveCardProps) => (
  <div className="page">
    <ReactiveCard {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    tabs: [
      {
        headerText: "Headless Migration",
        progress: 0.5,
        metric: "Faster Load Speeds",
        content:
          "Accipiter Tech migrates your site to a headless architecture, delivering 30–50% faster page loads and up to 7% higher conversions for every 100ms of speed gained. Our trusted phased process preserves your SEO and content, while unlocking a faster, more scalable digital experience.",
      },
      {
        headerText: "AI Integration",
        progress: 3,
        metric: "Faster Content Generation",
        content:
          "Supercharge your business with AI automation. Generate high-quality content up to 3x faster than traditional methods. Instantly scale your output, react to market trends in real time, and keep your brand ahead with rapid, consistent publishing.",
      },
      {
        headerText: "Microservices",
        progress: 1,
        metric: "Data Security",
        content:
          "Accipiter Tech’s microservices architecture fully separates critical services from public access, eliminating admin panel attacks and isolating vulnerabilities. Each function runs independently, so server-side and frontend attacks can’t spread, and essential services always stay online even if one part goes down.",
      },
    ],
  },
};
