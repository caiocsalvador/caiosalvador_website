import useExperiencesData from "@/sanity/hooks/useExperiencesData";
import ExperienceItem from "./experience-item";
import Color from "@/types/color";

const colors = ["blue", "green", "pink", "orange", "darkBlue"];

const Experience = async () => {
  const experiences = await useExperiencesData();
  return (
    <div className="container relative mx-auto">
      <div id="experience" className="absolute left-0 top-[-100px]"></div>
      <h2 className="mb-10 text-center font-league_spartan text-6xl font-semibold">Experience</h2>
      <div className="grid grid-flow-row grid-cols-2 grid-rows-3 gap-4">
        {experiences.map((item: any, index: number) => (
          <ExperienceItem
            key={index}
            title={item.title}
            startDate={item.startYear}
            endDate={item.endYear}
            description={item.description}
            color={colors[index] as Color}
            className={item.order === 1 ? `row-span-2 order-${item.order}` : `order-${item.order}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
