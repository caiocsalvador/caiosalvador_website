// Next.js imports and global styles
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./globals.css";
// Fonts
import { Inter, League_Spartan } from "next/font/google";
// Custom components
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Caio Salvador - Full-stack Developer",
  description: "Full-stack Developer with experience in Digital Marketing and Data Analysis",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-league-spartan",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${league_spartan.variable} antialiased`}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-3895G2H755" />
    </html>
  );
}
