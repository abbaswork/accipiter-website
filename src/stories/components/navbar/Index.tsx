'use client';
import React from 'react';
import  "./styles.scss";
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

let links: LinkType[] = [
  { label: 'About', url: '/about.com', },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' }
]


export const Navbar = () => {
  const [mobileDisplay, setMobileDisplay] = React.useState(false);

  //State to track the visibility of the navbar on mobile only
  let mobileDisplayClass = "mobile-hide";
  if (mobileDisplay) {
    mobileDisplayClass = "mobile-display";
  } else {
    mobileDisplayClass = "mobile-hide";
  }

  return (

    <div className={"navbar"}>
      <div className={"navbar-container "}>
        <NavbarLogo />
        <div className={`navbar-items ${mobileDisplayClass}`}>
          {links?.map((item, index) => (
            <Link key={index} href={item.url} className={"navbar-item"}>
              {item.label}
            </Link>
          ))}
          <Link className={`mobile-demo navbar-item`} key={links.length + 1} href={"/consultation"}>
            {"Consultation"}
          </Link>
        </div>
        <HamburgerMenu
          onOrOff={mobileDisplay}
          setOnOrOff={setMobileDisplay}
        />
        <div className="consultation-button">
          <Link href="/consultation" className={"consultation-text"}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
};


export const NavbarLogo = () => {
  return (
    <div>
      <Link href="/" className={"navbarLogo"}>
        Accipter Tech</Link>
    </div>
  );
}

export const HamburgerMenu = ({ onOrOff, setOnOrOff }: HamburgerProps) => {
  return (
    <div className={"hamburger-container"}>
      <div className={"navbar-hamburger"} onClick={(e) => setOnOrOff(!onOrOff)}>
        <Image
          className={"navbar-hamburger"}
          src="/hamburger.svg"
          alt="Hamburger Menu"
          width={50}
          height={50}
        />
      </div>
    </div>
  )
}