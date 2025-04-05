import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Dancing_Script, Josefin_Sans } from "next/font/google";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Dancing Script Font Configuration
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
});

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export const metadata: Metadata = {
  title: "The Rustic Barrel",
  description:
    "Stylish neighborhood joint with bar games, a covered patio offering cocktails, and craft beers on tap.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${dancingScript.variable} ${josefinSans.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
