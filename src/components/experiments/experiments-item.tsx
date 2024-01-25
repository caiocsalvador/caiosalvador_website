"use client";
import Link from "next/link";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type ExperimentItemProps = {
  title: string;
  description: string;
  tags: string[];
  // icon: string;
  url: string;
  repo: string;
};

const ExperimentItem = ({ title, description, tags, url, repo }: ExperimentItemProps) => {
  // Animations
  const experimentscontainer = useRef(null);
  useGSAP(
    () => {
      let mm = gsap.matchMedia();
      gsap.registerPlugin(ScrollTrigger);
      mm.add("(min-width: 1000px)", () => {
        gsap.from(".experimentBox", {
          scrollTrigger: {
            trigger: experimentscontainer.current,
            start: "top 80%",
          },
          y: 150,
          opacity: 0,
          duration: 1,
          ease: "back",
        });
      });
    },
    { scope: experimentscontainer }
  );

  return (
    <div ref={experimentscontainer}>
      <div className="experimentBox bg-gradient-to-r from-[#268EC5] to-[#268EC533] p-2">
        <div className=" bg-transparent_black p-3 lg:p-5">
          <div className="flex justify-between">
            <Link href={repo} target="_blank">
              <FaGithub className="text-gray-500 h-4 w-4 transition-all hover:text-blue lg:h-7 lg:w-7" />
            </Link>
            <Link href={repo} target="_blank">
              <FaArrowUpRightFromSquare className="text-gray-500 h-4 w-4 transition-all hover:text-blue  lg:h-7 lg:w-7" />
            </Link>
          </div>
          <Link href={url} target="_blank">
            <h3 className="mb-3 mt-4 font-league_spartan text-xl font-semibold lg:mb-5 lg:mt-8 lg:text-4xl">{title}</h3>
          </Link>

          <p className="text-sm lg:text-base">{description}</p>
          <div className="mt-3 flex flex-row flex-wrap lg:mt-6">
            {tags.map((tag, index) => (
              <p key={index} className="mr-4 font-semibold leading-8 md:max-xl:text-sm md:max-xl:leading-6">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperimentItem;
