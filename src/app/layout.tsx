// Next.js imports and global styles
import type { Metadata } from "next";
import "./globals.css";
// Fonts
import { inter, league_spartan } from "@/utils/fonts";
// Custom components
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Caio Salvador - Full-stack Developer",
  description: "Full-stack Developer with experience on Digital Marketing and Data Analysis",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${league_spartan.variable} antialiased`}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
