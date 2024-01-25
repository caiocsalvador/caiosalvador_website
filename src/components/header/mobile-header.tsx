import { useRef, useState } from "react";
import Social from "../social/social";
import Navbar from "./navbar/navbar";
import { FaBars } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HeaderMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerMobile = useRef(null);
  useGSAP(
    () => {
      if (isOpen) {
        console.log("open");
        gsap.fromTo(
          ".navbar",
          { x: 250, ease: "power2.inOut", display: "none" },
          { x: 0, duration: 0.5, display: "block" }
        );
      } else {
        console.log("closed");
        gsap.to(".navbar", { x: 250, duration: 0.5, ease: "power2.inOut", display: "none" });
      }
    },
    { dependencies: [isOpen], scope: headerMobile }
  );

  return (
    <div ref={headerMobile} className="flex lg:hidden">
      <Social />
      <div className="my-auto ml-3 sm:ml-10" onClick={() => setIsOpen(true)}>
        <FaBars className="text-2xl" />
      </div>
      <div className="navbar fixed left-0 top-0 hidden h-screen w-screen">
        <div
          className="z-1 backdrop fixed left-0 top-0 h-screen w-screen bg-transparent_black blur-3xl"
          onClick={() => setIsOpen(false)}
        />
        <Navbar onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default HeaderMobile;
