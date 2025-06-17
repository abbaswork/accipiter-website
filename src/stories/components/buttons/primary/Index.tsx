import React from "react";
import styles from "./style.module.scss";

//creating Props for Card
export interface PrimaryCTAProps {
  label: string;
  link: string;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const PrimaryCTA = ({
  link,
  label,
  style,
  className,
  onClick,
}: PrimaryCTAProps) => {
  return (
    <a
      className={`${styles["primary-cta"]} ${className}`}
      href={link}
      style={style}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  );
};
