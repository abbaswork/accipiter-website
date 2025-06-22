import styles from "./page.module.scss";
import { Hero } from "@/stories/components/hero/Index";

const HeroProps = {
  title: "Legacy <span>Reimagined</span>,\nFuture-Proofed",
  subtitle:
    "Seamless headless migrations, AI-optimized ecosystems, and enterprise resilience. ",
  logoSectionTitle: "Our Tech Stack",
  logoBarImage: "/logo-bar.svg",
  cta: {
    label: "Book a Consultation",
    href: "https://example.com/get-started",
  },
};

export default function Home() {
  return (
    <>
      <Hero {...HeroProps} />
    </>
  );
}
