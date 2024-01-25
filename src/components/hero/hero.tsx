"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

const Hero = () => {
  // Animations
  const heroContainer = useRef(null);
  useGSAP(
    () => {
      const heroTextAnimation = gsap.timeline();
      heroTextAnimation.from(".heroText1", {
        x: 350,
        opacity: 0,
        duration: 1,
        ease: "back",
      });
      heroTextAnimation.from(".heroText2", {
        opacity: 0,
        duration: 1,
        scale: 0.2,
        ease: "back",
      });
      heroTextAnimation.from(".heroText3", {
        opacity: 0,
        duration: 1,
        x: 350,
        ease: "back",
      });
      heroTextAnimation.from(".heroButton", {
        opacity: 0,
        duration: 1,
        x: -350,
        ease: "back",
      });
      heroTextAnimation.from(".hero-image", {
        opacity: 0,
        duration: 1,
        x: 350,
        ease: "bounce",
      });
    },
    { scope: heroContainer }
  );

  return (
    <div ref={heroContainer} className="container mx-auto font-league_spartan">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="self-center">
          <h4 className="heroText1 mb-3 text-2xl">Hello, I am</h4>
          <h1 className="heroText2 mb-3 text-5xl font-bold lg:text-6xl">Caio Salvador</h1>
          <h2 className="heroText3 mb-8 text-2xl lg:text-4xl">
            A Full-stack Developer with experience in Digital Marketing and Data Analysis
          </h2>
          <div className="heroButton">
            <button
              className="inline-block rounded-lg bg-blue px-6 py-2 text-lg text-white transition-all hover:bg-blueTint"
              onClick={() => document.getElementById("contact")!.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              Contact me
            </button>
          </div>
        </div>
        <div className="heroImage hero-image hidden md:flex">
          <Image className="ml-auto" src="images/hero.svg" alt="Hero Illustration" width={506} height={368} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
