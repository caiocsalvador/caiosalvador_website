import type { Metadata } from "next";
import { inter, league_spartan } from "@/utils/fonts";

import "./globals.css";

import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Caio Salvador - Full-stack Developer",
  description: "Full-stack Developer with experience on Digital Marketing and Data Analysis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${league_spartan.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
