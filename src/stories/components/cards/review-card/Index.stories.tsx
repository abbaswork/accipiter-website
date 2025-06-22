import type { Meta, StoryObj } from "@storybook/react";
import { Carousel, CarouselProps } from "./Index"; // Make sure this path is correct
import "@/styles/pages/global.scss";

const meta = {
  title: "Components/Card/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: CarouselProps) => (
  <div className="page">
    <Carousel {...args} />
  </div>
);

export const Primary: Story = {
  render: Template,
  args: {
    sectionTitle: "What our clients say",
    cardsData: [
      {
        id: "a",
        heroText:
          "Professional, reliable, and <b>security-focused</b>. Their expertise <b>transformed</b> our app!",
        subText: "Sadia Asad",
        authorText: "Branch Manager at CPR",
      },
      {
        id: "b",
        heroText:
          "We couldn’t have <b>navigated</b> headless migration without their <b>clear guidance</b> and insight.",
        subText: "Allia Hussein",
        authorText: "Founder of Mansion 28",
      },
      {
        id: "c",
        heroText:
          "The <b>growth</b> to SEO and page performance was <b>phenomenal!</b>",
        subText: "Ikra Khan",
        authorText: "Content Specalist at METRIC GAMER",
      },
    ],
  },
};
