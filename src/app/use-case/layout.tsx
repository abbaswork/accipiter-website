import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import styles from './layout.module.scss';
import "@/app/globals.scss";
import { SnapshotCard } from "@/stories/components/cards/snapshot-card/Index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Explore our case studies",
  description: "Headless, AI, AWS Case studies and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={styles['sidebar']}>
        <SnapshotCard/>
      </div>
      <article className={styles['blog-content']}>{children}</article>
    </>
  );
}
