import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

import Header from "@/components/header/header";

const inter = League_Spartan({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caio Salvador - Full-stack Developer",
  description: "Full-stack Developer with experience on Digital Marketing and Data Analysis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
