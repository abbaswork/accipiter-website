import type { Metadata } from "next";
import { Navbar } from "@/stories/components/navbar/Index";
import { Footer } from "@/stories/components/footer/Index";
import '@/app/fonts.css';
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "Accipiter Tech Consulting",
  description: " Legacy reimagined, Future Proofed",
};

const FooterArgs = {
  links: [
    { label: "Contact Us", url: "/contact" },
    { label: "About", url: "/about" },
    { label: "Privacy Policy", url: "/privacy" },
  ],
  socialLinks: [
    // { label: "Facebook", url: "#" },
    // { label: "Twitter", url: "#" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/abbas-khan-work" },
    // { label: 'GitHub', url: 'https://github.com' },
    { label: "Instagram", url: "https://www.instagram.com/accipiter.tech/#" },
  ],
  logo: {
    src: "/logo.svg",
    alt: "Logo",
  },
  copyright: `© ${new Date().getFullYear()} Accipiter Tech Consulting. All rights
        reserved.`,
};

const NavbarArgs = {
  links: [
    { label: "Home", url: "/" },
    { label: "Contact", url: "/contact" },
    { label: "About", url: "/about" },
    // { label: "Case Studies", url: "/" },
  ],
  cta: { label: "Book a Consultation", url: "/contact" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="page-body">
        <Navbar {...NavbarArgs} />
        {children}
        <Footer {...FooterArgs} />
      </body>
    </html>
  );
}
