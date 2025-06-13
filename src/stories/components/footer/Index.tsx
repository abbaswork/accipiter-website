import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";

export interface FooterProps {}

const links = [
  { label: "Contact Us", url: "/contact" },
  { label: "Privacy Policy", url: "/privacy" },
  { label: "Terms of Service", url: "/terms" },
];

const socialLinks = [
  { label: "Facebook", url: "https://facebook.com" },
  { label: "Twitter", url: "https://twitter.com" },
  { label: "LinkedIn", url: "https://linkedin.com" },
  { label: "GitHub", url: "https://github.com" },
  { label: "Instagram", url: "https://instagram.com" },
];

export const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <Link href="/" className={styles["footer-logo-row"]}>
        {/* <p className={styles["footer-logo-text"]}>Accipiter</p> */}
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={0}
          style={{ height: "100%" }}
          className={styles["footer-logo"]}
        />
        {/* <p className={styles["footer-logo-text"]}>Tech</p> */}
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
        &copy; {new Date().getFullYear()} Accipiter Tech Consulting. All rights
        reserved.
      </div>
    </footer>
  );
};
