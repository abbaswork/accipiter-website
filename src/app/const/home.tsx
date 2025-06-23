import { CardRowProps } from "@/stories/components/cards/card/Index";

export const HeroArgs = {
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

export const ourApproachArgs = {
  sectionTitle: "Our Approach",
  steps: [
    {
      headerText: "Phased Migration",
      subheaderText:
        "Accipiter Tech’s phased migration approach minimizes downtime and risk by breaking projects into manageable stages. This ensures both business continuity thorough testing, and seamless transition so your team stays productive and your value is preserved every step of the way.",
    },
    {
      headerText: "Rollback Strategies",
      subheaderText:
        "Accipiter Tech builds every headless migration with robust rollback strategies, so you can instantly revert to previous versions if needed. This safety net means any content or system change can be undone with minimal disruption, giving you full confidence to innovate without risk.",
    },
    {
      headerText: "Change Management",
      subheaderText:
        "Our structured change management process keeps your team engaged and confident throughout any transformation. With clear communication, hands-on training, and ongoing support, we ensure new systems are adopted smoothly and your team are set up to thrive.",
    },
    {
      headerText: "Security By Design",
      subheaderText:
        "Security is built into every layer from the start. We embed best practices, strict access controls, and continuous monitoring throughout development, proactively protecting your data and reputation while meeting compliance requirements—so you can innovate with confidence.",
    },
  ],
};

export const ourTestimonialsArgs = {
  sectionTitle: "Our Testimonials",
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
      authorText: "Founder of MANSION 28",
    },
    {
      id: "c",
      heroText:
        "The <b>growth</b> to SEO and page performance was <b>phenomenal!</b>",
      subText: "Ikra Khan",
      authorText: "Content Specalist at METRIC GAMER",
    },
  ],
};

export const ourUseCasesArgs = {
  sectionTitle: "Use Cases",
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
};

export const ourCaseStudiesArgs: CardRowProps = {
  sectionTitle: "Case Studies",
  cards: [
    {
      headerText: "Metric Gamer",
      subHeaderText: "Coming Soon",
      cardType: "Metric Gamer",
    },
  ],
};
