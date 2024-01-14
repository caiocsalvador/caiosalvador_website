import Color from "@/types/color";
import { PortableText } from "@portabletext/react";

type ExperienceItemProps = {
  title: string;
  startDate: string;
  endDate: string;
  description: any;
  color: Color;
  className?: string;
};

const ExperienceItem = ({ title, startDate, endDate, description, color, className }: ExperienceItemProps) => {
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
    <div className={`rounded-r-2xl border-l-4 bg-transparent_white p-5 ${colorVariants[color]} ${className}`}>
      <h3 className="font-league_spartan text-2xl font-semibold">{title}</h3>
      <p className="text-xs uppercase text-purple">
        {startDate} - {endDate}
      </p>
      <PortableText value={description} components={components} />
    </div>
  );
};

export default ExperienceItem;
