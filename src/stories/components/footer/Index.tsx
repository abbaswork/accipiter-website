import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

export interface FooterProps {
  links: { label: string; url: string }[];
  socialLinks: { label: string; url: string }[];
  logo: { src: string; alt: string; };
  copyright: string;
}

export const Footer = ({ links, socialLinks, logo, copyright }: FooterProps) => {
  return (
    <footer className={styles["footer-container"]}>
      <Link href="/" className={styles["footer-logo-row"]}>
        <Image
          src={logo?.src || "/logo.svg"}
          alt={logo?.alt || "Logo"}
          width={100}
          height={0}
          style={{ height: "100%" }}
          className={styles["footer-logo"]}
        />
      </Link>

      <div className={styles["footer-links"]}>
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className={styles["footer-link"]}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className={styles["footer-social-links"]}>
        {socialLinks.map((link) => (
          <Link
            key={link.label}
            href={link.url}
            className={styles["footer-social-link"]}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className={styles["footer-copyright"]}>
        {copyright}
      </div>
    </footer>
  );
};
