import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Index"; // Make sure this path is correct
import "./../../../styles/pages/global.scss";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: Story["render"] = (args) => (
  <div
    className="page"
    style={{
      background: "black",
      height: "100vh",
      width: "100vw",
      maxWidth: "100vw",
    }}
  >
    <Navbar {...args} />
  </div>
);

export const Primary: Story = {
  render: Template, // Use the Template for rendering
  args: {
    links: [
      { label: "Home", url: "/" },
      { label: "Contact", url: "/contact" },
      { label: "About", url: "/about" },
      // { label: "Case Studies", url: "/" },
    ],
    cta: { label: "Book a Consultation", url: "/contact" },
  },
  parameters: {
    layout: "fullscreen",
  },
};
