import { Hero } from "@/stories/components/hero/Index";

const headerArgs = {
  title: "Use Case Hero Title",
  authorName: "John Doe",
  authorPosition: "Software Engineer",
  authorImage: "/author-icon.svg",
};

const HeroArgs = {
  title: "Learn More About Us\n <span>Coming Soon</span>",
  subtitle:
    "We are just launching and will be adding more information about our services and expertise soon. Stay tuned!",
  cta: {
    label: "Book a Consultation",
    href: "https://example.com/get-started",
  },
};

export default function Contact() {
  return (
    <>
      <Hero {...HeroArgs} />
    </>
  );
}
