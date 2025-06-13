import React from "react";
import styles from "./style.module.scss";

//creating Props for Card
export interface PrimaryCTAProps {
  cta: { label: string; link: string };
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const PrimaryCTA = ({
  cta,
  style,
  className,
  onClick,
}: PrimaryCTAProps) => {
  return (
    <a
      className={`${styles["primary-cta"]} ${className}`}
      href={cta.link}
      style={style}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {cta.label}
    </a>
  );
};
