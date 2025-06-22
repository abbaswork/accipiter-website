import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "./layout.module.scss";
import "@/app/globals.scss";
import { SnapshotCard } from "@/stories/components/cards/snapshot-card/Index";
import { UsecaseHero } from "@/stories/components/usecase-hero/Index";

const sidebarData = {
  title: "Case Study Snapshot",
  challange: "Downtrend in SEO despite best practices.",
  solution: "Implementation of microservices through AWS and related tech.",
  outcome: "100% increase in SEO performance.",
  tech: [
    {
      name: "Tech Stack",
      subTech: ["AWS", "Docker", "Kubernetes", "Node.js", "React"],
    },
    {
      name: "Sub Tech",
      subTech: ["GraphQL", "REST APIs", "CI/CD", "Monitoring"],
    },
  ],
  cta: { label: "Read More", link: "#" },
};

const headerArgs = {
  title: "Use Case Hero Title",
  authorName: "John Doe",
  authorPosition: "Software Engineer",
  authorImage: "/author-icon.svg",
};

export const metadata: Metadata = {
  title: "Explore our case studies",
  description: "Headless, AI, AWS Case studies and more",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <UsecaseHero {...headerArgs} />
      <div className={styles["sidebar"]}>
        <SnapshotCard
          title={sidebarData.title}
          challange={sidebarData.challange}
          solution={sidebarData.solution}
          outcome={sidebarData.outcome}
          tech={sidebarData.tech}
          cta={sidebarData.cta}
        />
      </div>
      <article className={styles["blog-content"]}>{children}</article>
    </>
  );
}
