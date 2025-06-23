import { Hero } from "@/stories/components/hero/Index";
import { VerticalStepList } from "@/stories/components/vertical-step-list/Index";

const HeroArgs = {
  title: "<span>About Us</span>",
  subtitle: "Learn more about our expertise and services.",
  cta: {
    label: "Book a Consultation",
    href: "https://example.com/get-started",
  },
};

export const ourApproachArgs = {
  // sectionTitle: "Our Approach",
  steps: [
    {
      headerText: "Our Expertise",
      subheaderText: `At Accipiter Tech Consultancy, our team brings together 10+ years of collective experience in transforming enterprise digital infrastructures for some of the world's most innovative companies.\n
Our team's proven track record such as Coefficient, Komi, and Prodigy Education has led to industry recognition and measurable results that speak for themselves. We've consistently delivered at least 30% improvements in mobile page performance through headless migration and page speed optimizations and best practices, 50% increase in reporting coverage and AI integration to speed publishing flows by over 300%.
Our work has earned praise from major technology platforms, including recognition from Facebook for our innovative analytics solutions that recovered 80% of blocked traffic post-iOS updates.\n
We specialize in the cutting-edge technologies that power modern enterprises and build end to end: headless CMS architectures, microservices development, AI integration, and cloud-native solutions. Our expertise ranges from React/Next.js frontends to microservices running through Node.JS and Python, with deep proficiency in AWS and GCP cloud platforms, all the way through popular marketing stacks such as GTM, HubSpot, Segment and more.`,
    },
    {
      headerText: "Mission Statement",
      subheaderText: `Accipiter Tech Consultancy exists to transform legacy enterprise infrastructures into scalable, high-performance digital platforms that unlock business growth through seamless headless architecture migrations, microservices development, and AI integration.\n
We maintain the highest levels of professionalism, fairness, honesty, and transparency through careful planning and stakeholder management and by an understanding first approach.\n
We are committed to minimizing client downtime, reducing technical debt, and empowering development teams with modern tools and workflows that drive measurable performance improvements and competitive advantage. Our vision is to become one of the leading headless architecture and AI integration consultancies for enterprise companies, recognized for our innovative phased migration approach and exceptional client outcomes.`,
    },
    {
      headerText: "Services",
      subheaderText: `Headless Architecture Migrations
We specialize in seamless transitions from monolithic content management systems to modern headless architectures. Our phased adoption strategy minimizes downtime while preserving SEO rankings and business continuity. We provide complete migrations from WordPress, Shopify, and custom CMSs to Next.js-powered solutions, with custom integrations to existing CRM, ERP, and marketing automation platforms.\n
Microservices Development & Integration
Our team excels at converting legacy systems into modular, API-driven microservices that enhance scalability and maintainability. We design cloud-native architectures using AWS infrastructure, implement GDPR-compliant data isolation, and establish robust CI/CD pipelines for autonomous deployment. Our solutions enable independent scaling of services while maintaining system reliability.\n
AI Integration Solutions
We deliver AI-driven personalization engines for e-commerce and content platforms, automation of content production workflows, and predictive analytics systems. Our AI solutions include recommendation engines, automated content optimization, and AI-assisted SEO strategies that drive measurable improvements in user engagement and conversion rates.`,
    },
  ],
};

export default function Contact() {
  return (
    <>
      <Hero {...HeroArgs} style={{ height: "30vh"}} />
      <VerticalStepList {...ourApproachArgs} style={{ paddingTop: "0rem" }} />
    </>
  );
}
