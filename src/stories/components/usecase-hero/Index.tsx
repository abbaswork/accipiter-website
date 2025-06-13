import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

export interface UsecaseHeroProps {
  title: string;
  authorName: string;
  authorPosition: string;
  authorImage?: string;
  onClick?: () => void;
}

export const UsecaseHero = ({
  title,
  authorName,
  authorPosition,
  authorImage,
  onClick,
}: UsecaseHeroProps) => {
  return (
    <div className={styles["use-case-hero-section"]}>
      <h1 className={styles["hero-title"]}>{title}</h1>
      <div className={styles["hero-author-container"]}>
        <Image
          className={styles["hero-icon"]}
          src="/author-icon.svg"
          alt="Author icon"
          width={32}
          height={32}
          priority
        />
        <p className={styles["hero-author"]}>{authorName}</p>
        <p className={styles["hero-position"]}>{authorPosition}</p>
      </div>
    </div>
  );
};
