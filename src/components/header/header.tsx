"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

export default function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <header
      className={`sticky top-0 z-10 px-4 py-5 md:px-0 ${
        scrollTop > 50 ? "bg-gradient-to-r from-navy from-100% to-red" : ""
      }`}
    >
      <div className="container relative mx-auto flex justify-between font-league_spartan">
        <Image src="/images/logo.svg" alt="Caio Salvador Logo" width={190} height={42} />
        <DesktopHeader />
        <MobileHeader />
      </div>
    </header>
  );
}
