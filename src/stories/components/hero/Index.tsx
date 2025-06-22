import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { PrimaryCTA } from "../buttons/primary/Index";

export interface HeroProps {
  title: string;
  subtitle?: string;
  logoBarImage?: string;
  logoSectionTitle?: string;
  cta?: { label: string; href: string };
}

export const Hero = ({
  title,
  logoBarImage,
  subtitle,
  logoSectionTitle,
  cta,
}: HeroProps) => {
  return (
    <div className={styles["hero-section"]}>
      <h1
        className={styles["hero-title"]}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && <p className={styles["hero-subtitle"]}>{subtitle}</p>}

      {cta && <PrimaryCTA link={cta.href} label={cta.label} />}

      {logoBarImage && (
        <div className={styles["logo-section"]}>
          {logoSectionTitle && (
            <h3 className={styles["logo-section-title"]}>{logoSectionTitle}</h3>
          )}
          {logoBarImage && (
            <Image
              className={styles["logo-bar"]}
              src={logoBarImage}
              alt="Logo bar"
              width={488}
              height={0}
              style={{ height: "auto", maxWidth: "100vw" }}
              priority
            />
          )}
        </div>
      )}
    </div>
  );
};
