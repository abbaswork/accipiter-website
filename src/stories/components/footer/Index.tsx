'use client';
import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export interface FooterProps {

}


export const Footer = () => {

  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerSocials}>
          <Link className={styles.footerAccipterText} href="https://www.accipiter.com.au/" target="_blank">
            Accipter Tech
          </Link>
        <div className={styles.footerAccipterSocials}>
        <Link href="https://www.linkedin.com/company/metricgamer/" target="_blank">
          <img src="/src/stories/components/footer/linkedin.svg" alt="LinkedIn" width={40} height={40}/>
        </Link>
        <Link href="https://www.instagram.com/metricgamer/" target="_blank">
          <img src="/src/stories/components/footer/instagram.svg" alt="Instagram" width={40} height={40}/>
        </Link>
        <Link href="https://www.facebook.com/metricgamer/" target="_blank">
          <Image src="/src/stories/components/footer/facebook.svg" alt="Facebook" width={40} height={40}/>
        </Link>
        </div>
      </div>
      <div className={styles.AccipterLogo}>
        <Link href="https://www.accipiter.com.au/" target="_blank">
          <Image 
          src="Logo.svg"
          alt="Accipter-Tech-Logo"
          width={113}
          height={113}/>
        </Link>
      </div>
      <div className={styles.footerContactsContainer}>
        <Link className={styles.footerContacts} href="">Contact Us</Link>
        <Link className={styles.footerContacts} href="">Privacy Policy</Link>
        <Link className={styles.footerContacts} href="">Terms of Service</Link>
      </div>
    </div>
  );
}