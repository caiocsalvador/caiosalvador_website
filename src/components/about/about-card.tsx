"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Social from "../social/social";
import { PortableText } from "@portabletext/react";
import { TypedObject } from "sanity";

type AboutCardProps = {
  title: string;
  text: TypedObject[];
  imageUrl: string;
};

const AboutCard = ({ title, text, imageUrl }: AboutCardProps) => {
  // Animations
  const aboutContainer = useRef(null);
  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      gsap.registerPlugin(ScrollTrigger);
      mm.add("(min-width: 1000px)", () => {
        gsap.from(".aboutText", {
          scrollTrigger: {
            trigger: aboutContainer.current,
            start: "top 80%",
          },
          x: 350,
          opacity: 0,
          duration: 1,
          ease: "back",
        });
        gsap.from(".aboutImage", {
          scrollTrigger: {
            trigger: aboutContainer.current,
            start: "top 80%",
          },
          opacity: 0,
          duration: 1.5,
          scale: 0.2,
          ease: "back",
        });
      });
    },
    { scope: aboutContainer }
  );

  // Sanity Portable Text
  const components = {
    block: ({ children }: any) => <div className="mb-2">{children}</div>,
  };

  return (
    <>
      <div id="about" className="absolute left-0 top-[-100px]"></div>
      <h2 className="mb-10 text-center font-league_spartan text-5xl font-semibold xl:text-6xl">{title}</h2>
      <div
        ref={aboutContainer}
        className="grid gap-2 bg-gradient-to-r from-about_gcolor1 to-about_gcolor2 md:grid-cols-3"
      >
        <div className="aboutText order-2 flex flex-col justify-center bg-transparent_black p-5 sm:p-10 md:order-none md:col-span-2">
          <PortableText value={text} components={components} />
        </div>
        <div className="order-1 flex flex-col items-center p-5 pt-10 md:order-none">
          <div className="aboutImage max-h-[250px] max-w-[250px] rounded-full bg-white p-1">
            <Image src={imageUrl} alt="Caio Salvador" className="rounded-full" width={250} height={250} />
          </div>
          <div className="mt-6 flex flex-row justify-center md:mt-12">
            <Social size="lg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
