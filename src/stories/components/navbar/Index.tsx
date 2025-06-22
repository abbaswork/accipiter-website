"use client";
import React from "react";
import "./styles.scss";
import Link from "next/link";
import Image from "next/image";

export interface HamburgerProps {
  onOrOff: boolean;
  setOnOrOff: (onOrOff: boolean) => void;
}

export type LinkType = {
  label: string;
  url: string;
};

interface NavbarProps {
  links: LinkType[];
  cta: {label: string; url: string};
}

export const Navbar = ({ links, cta }: NavbarProps) => {

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
      <div className={"navbar-container"}>
        <NavbarLogo />
        <div className={`navbar-items ${mobileDisplayClass}`}>
          {links?.map((item, index) => (
            <Link key={index} href={item.url} className={"navbar-item"}>
              {item.label}
            </Link>
          ))}
          <Link
            className={`mobile-demo navbar-item`}
            key={links.length + 1}
            href={cta.url}
          >
            {cta.label}
          </Link>
        </div>
        <HamburgerMenu onOrOff={mobileDisplay} setOnOrOff={setMobileDisplay} />
        <div className="consultation-button">
          <Link href={cta.url} className={"consultation-text"}>
            {cta.label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export const NavbarLogo = () => {
  return (
    <Link href="/" className={"navbar-logo"}>
      Accipter Tech
    </Link>
  );
};

export const HamburgerMenu = ({ onOrOff, setOnOrOff }: HamburgerProps) => {
  return (
    <div className={"hamburger-container"}>
      <div className={"navbar-hamburger"} onClick={() => setOnOrOff(!onOrOff)}>
        <Image
          className={"navbar-hamburger"}
          src="/hamburger.svg"
          alt="Hamburger Menu"
          width={50}
          height={50}
        />
      </div>
    </div>
  );
};
