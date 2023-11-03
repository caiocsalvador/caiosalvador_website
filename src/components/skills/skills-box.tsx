import React from "react";

type SkillsBoxProps = {
  type: "large" | "small";
  color: "green" | "blue" | "purple";
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
  };

  // Switch statement to handle the different types of skills boxes
  switch (type) {
    case "large":
      return (
        <div className={`flex justify-between ${className}`}>
          <div className="from-gradient_blue to-gradient_purple mt-16 h-[370px] w-[2px] bg-gradient-to-b"></div>
          <div className={`bg-transparent_white rounded-2xl px-4 py-5 ${className}`}>
            <h3 className={`mb-5 text-center text-4xl ${colorVariants[color].heading}`}>{title}</h3>
            <ul className="list-inside list-disc columns-3">
              {skills.map((skill) => (
                <li className={`text-lg ${colorVariants[color].list}`} key={skill}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="from-gradient_blue to-gradient_purple mt-16 h-[370px] w-[2px] bg-gradient-to-b"></div>
        </div>
      );
    // If the type is not large, it will default to small
    default:
      return (
        <div className={`bg-transparent_white mt-16 rounded-2xl px-4 py-5 ${className}`}>
          <h3 className={`mb-5 text-4xl ${colorVariants[color].heading}`}>{title}</h3>
          <ul className={`list-inside list-disc text-lg ${colorVariants[color].list}`}>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      );
  }
};

export default SkillsBox;
