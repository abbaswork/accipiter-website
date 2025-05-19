'use client';
import React from 'react';
import  "./styles.scss";
import Link from 'next/link';
import Image from 'next/image';

export interface HamburgerProps {
  onOrOff: boolean;
  setOnOrOff: (onOrOff: boolean) => void;
  onOrOffClass: string;
}

export type LinkType = {
  label: string;
  url: string;
};

let links = [
  { label: 'About', url: '/about.com', },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' },
  { label: 'About', url: '/about.com' }
]


export const Navbar = () => {
  const [onOrOff, setOnOrOff] = React.useState(false);

  //State to track the visibility of the navbar
  let onOrOffClass = "hidden";
  if (onOrOff) {
    onOrOffClass = "visible";
  } else {
    onOrOffClass = "hidden";
  }

  return (

    <div className={"navbar"}>
      <div className={"navbar-container "}>
        <NavbarLogo />
        <div className={`navbar-items ${onOrOffClass}`}>
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
          onOrOff={onOrOff}
          setOnOrOff={setOnOrOff}
          onOrOffClass={onOrOffClass}
        />
        <div className={`${"consultation-button "}`}>
          <Link href="/consultation" className={"consultationText"}>
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

export const HamburgerMenu = ({ onOrOff, setOnOrOff, onOrOffClass }: HamburgerProps) => {
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