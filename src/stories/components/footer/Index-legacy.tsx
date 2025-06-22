import React from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { label: 'Contact Us', url: '/contact' },
  { label: 'Privacy Policy', url: '/privacy' },
  { label: 'Terms of Service', url: '/terms' },
]

export const Footer = () => {
//Logo was made first as to accomadte for mobile view, which will have the logo on top
//Whereas the display for the desktop will have the logo on the left
  return (
    <div className={styles.footerContainer}>
      <Link href="/" className={styles.footerLogo}>
        <Image
          src="/logo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
        </Link>
      <div className={styles.footerSocialsContainer}>
        <div className={styles.footerSocials}>
          <a>ACCIPITER TECH</a>
          <div className={styles.footerSocialsIcons}>
            <Link href={"https://www.linkedin.com/company/accipiter-tech/"}>
              <Image
                src="/linkedIn.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"https://www.instagram.com/accipiter-tech/"}>
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href={"https://www.facebook.com/accipiter-tech/"}>
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.footerLinkContainer}>
        {links?.map((item, index) => (
          <Link key={index} href={item.url} className={styles.footerItem}>
            {item.label}
          </Link>
        ))}

      </div>
    </div>

  );
};
