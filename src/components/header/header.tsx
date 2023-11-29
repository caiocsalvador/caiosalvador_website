"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./navbar/navbar";
import Social from "../social/social";

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
      className={`sticky top-0 z-10 py-5  ${scrollTop > 50 ? "bg-gradient-to-r from-navy from-100% to-red" : ""}`}
    >
      <div className="container mx-auto flex justify-between font-league_spartan">
        <Image src="/images/logo.svg" alt="Caio Salvador Logo" width={190} height={42} />
        <div className="flex space-x-14">
          <Navbar />
          <Social />
        </div>
      </div>
    </header>
  );
}
