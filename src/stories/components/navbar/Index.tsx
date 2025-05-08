'use client';
import React from 'react';
import styles from './style.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export interface HamburgerProps {
  onOrOff: boolean;
  setOnOrOff: (onOrOff: boolean) => void;
}

export type LinkType = {
  label: string;
  url: string;
};

const links = [
  { label: 'About', url: '/about.com', },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' }
]


export const Navbar = () => {
  const [onOrOff, setOnOrOff] = React.useState(false);
  
  //State to track the visibility of the navbar
  let onOrOffClass = styles.hidden;
  if (onOrOff) {
    onOrOffClass = styles.visible;
  } else {
    onOrOffClass = styles.hidden;
  }
  return (

    <div className={styles.navbar}>
     <NavbarLogo />
     <HamburgerMenu 
     onOrOff = {onOrOff}
     setOnOrOff = {setOnOrOff}/>
      <div className={styles.navbarContainer}>
      <div className={`${styles.navbarItems} ${onOrOffClass}`}>
        {links?.map((item, index) => (
          <Link key={index} href={item.url} className={styles.navbarItem}>
            {item.label}
          </Link>
        ))}
        </div>
      </div>
      <div className={`${styles.consultationButton}`}>    
            <Link href="/consultation" style={{ color: 'white', textDecoration: 'none', width: '100%' }}>
          Book a Consultation
        </Link>
      </div>
      </div>
  );
};


export const NavbarLogo = () => {
  return (
    <div className={styles.navbarLogo}>
      <Link href="/" className={styles.navbarLogo}>
      Accipter Tech</Link>

    </div>
  );
}

export const HamburgerMenu = ({onOrOff, setOnOrOff}: HamburgerProps) => {
  return (
    <div className={styles.hamburgerContainer}>
        <div className={styles.navbarHamburger} onClick={(e) => setOnOrOff(!onOrOff)}>
          <Image
            className={styles.navbarHamburger}
            src="/hamburger.svg"
            alt="Hamburger Menu"
            width={50}
            height={50}
          />
        </div>
      </div>
  )
}