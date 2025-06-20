import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export interface HeroProps {
  title: string;
  subtitle?: string;
  logoBarImage?: string;
  logoSectionTitle?: string;
  cta?: {label: string; href: string};
}

export const Hero = ({ title, logoBarImage = "/logo-bar.svg", subtitle="Seamless headless migrations, AI-optimized ecosystems, and enterprise resilience since 2025.", logoSectionTitle = "Our Tech Stack" }: HeroProps) => {
  return (
    <div className={styles["hero-section"]}>
      <h1 className={styles["hero-title"]} dangerouslySetInnerHTML={{ __html: title }} />
      <p className={styles["hero-subtitle"]}>{subtitle}</p>
      <div className={styles["logo-section"]}>
        <h3 className={styles["logo-section-title"]}>{logoSectionTitle}</h3>
        <Image
          className={styles["logo-bar"]}
          src={logoBarImage}
          alt="Logo bar"
          width={488}
          height={0}
          style={{ height: "auto" }}
          priority
        />
      </div>
    </div>
  );
};
