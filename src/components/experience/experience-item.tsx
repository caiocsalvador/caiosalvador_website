"use client";
import Color from "@/types/color";
import { PortableText } from "@portabletext/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ExperienceItemProps = {
  title: string;
  startDate: string;
  endDate: string;
  description: any;
  color: Color;
  className?: string;
};

const ExperienceItem = ({ title, startDate, endDate, description, color, className }: ExperienceItemProps) => {
  // Animations
  const experiecesContainer = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from([".experience.order-1", ".experience.order-4"], {
        scrollTrigger: {
          trigger: experiecesContainer.current,
          start: "top 80%",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "elastic",
      });
      gsap.from([".experience.order-2", ".experience.order-3", ".experience.order-5"], {
        scrollTrigger: {
          trigger: experiecesContainer.current,
          start: "top 80%",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "elastic",
      });
    },
    { scope: experiecesContainer }
  );
  // Component colors
  const colorVariants = {
    darkBlue: "border-darkBlue",
    green: "border-green",
    pink: "border-pink",
    orange: "border-orange",
    blue: "border-blue",
    purple: "border-purple",
  };

  const components = {
    block: ({ children }: any) => <div className="text mt-2 leading-6 text-gray">{children}</div>,
  };

  return (
    <div className={`${className}`} ref={experiecesContainer}>
      <div
        className={`experience rounded-r-2xl border-l-4 bg-transparent_white p-5 ${colorVariants[color]} ${className}`}
      >
        <h3 className="font-league_spartan text-2xl font-semibold">{title}</h3>
        <p className="text-xs uppercase text-purple">
          {startDate} - {endDate}
        </p>
        <PortableText value={description} components={components} />
      </div>
    </div>
  );
};

export default ExperienceItem;
