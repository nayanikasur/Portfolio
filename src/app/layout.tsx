import type { Metadata } from "next";
import "./globals.css";

import { Inter, Inter_Tight, Instrument_Serif, JetBrains_Mono } from "next/font/google";

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--nf-display",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--nf-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--nf-serif",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--nf-mono",
});

export const metadata: Metadata = {
  title: "Nayanika Sur — Full-stack developer",
  description:
    "Nayanika Sur is a full-stack developer in Bangalore who designs in Figma and ships in React, Next.js and Node.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
