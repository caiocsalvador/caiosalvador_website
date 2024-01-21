import React from "react";
import Color from "@/types/color";

type SkillsBoxType = "large" | "small";

type SkillsBoxProps = {
  type: SkillsBoxType;
  color: Color;
  title: string;
  skills: string[];
  className?: string;
};

const SkillsBox: React.FC<SkillsBoxProps> = ({ type, color, title, skills, className }) => {
  // Object to handle the different color variants
  const colorVariants = {
    blue: { heading: "text-blue", list: "text-lightBlue" },
    green: { heading: "text-green", list: "text-lightGreen" },
    purple: { heading: "text-purple", list: "text-lightPurple" },
    pink: { heading: "text-pink", list: "text-lightPink" },
    orange: { heading: "text-orange", list: "text-lightOrange" },
    darkBlue: { heading: "text-lightBlue", list: "text-blue" },
  };

  // Switch statement to handle the different types of skills boxes
  switch (type) {
    case "large":
      return (
        <div className={`flex flex-col ${className}`}>
          <div className={`flex justify-between`}>
            <div className="mr-4 mt-16 hidden h-[370px] w-[2px]  flex-shrink-0 bg-gradient-to-b from-gradient_blue to-gradient_purple lg:block"></div>
            <div className={`h-[fit-content] rounded-2xl bg-transparent_white px-5 py-5  ${className}`}>
              <h3
                className={`mb-5 text-center font-league_spartan text-2xl tracking-wide lg:text-2xl xl:text-4xl ${colorVariants[color].heading}`}
              >
                {title}
              </h3>
              <ul className="flex list-inside list-disc flex-wrap">
                {skills.map((skill) => (
                  <li
                    className={`mb-3 w-1/2 text-xs md:w-1/4 md:text-xs lg:w-[33%] xl:text-base ${colorVariants[color].list}`}
                    key={skill}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="ml-4 mt-16 hidden h-[370px] w-[2px] flex-shrink-0 bg-gradient-to-b from-gradient_blue to-gradient_purple lg:block"></div>
          </div>
          <h4 className="font-lg mt-6 hidden text-center font-league_spartan font-light lg:block">Always leaning...</h4>
        </div>
      );
    // If the type is not large, it will default to small
    default:
      return (
        <div className={`mt-10 rounded-2xl bg-transparent_white px-5 py-5 lg:mt-16 ${className}`}>
          <h3
            className={`mb-5 text-center  font-league_spartan text-2xl tracking-wide lg:text-left lg:text-2xl xl:text-4xl ${colorVariants[color].heading}`}
          >
            {title}
          </h3>
          <ul
            className={`ml-4 flex list-outside list-disc flex-wrap indent-2 md:ml-0 md:list-inside ${colorVariants[color].list}`}
          >
            {skills.map((skill) => (
              <li key={skill} className="mb-3 w-1/2 indent-0 text-xs md:w-1/3 md:max-xl:text-xs lg:w-full xl:text-base">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      );
  }
};

export default SkillsBox;
