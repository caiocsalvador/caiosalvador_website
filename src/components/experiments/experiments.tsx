import ExperimentItem from "./experiments-item";
import useProjectsData from "@/sanity/hooks/useProjectsData";

const Experiments = async () => {
  // Get Data
  const projects = await useProjectsData();

  return (
    <div className="container relative mx-auto">
      <div id="experiments" className="absolute left-0 top-[-100px]"></div>
      <h2 className="mb-4 text-center font-league_spartan text-5xl font-semibold xl:text-6xl">Experiments</h2>
      <h3 className="mb-20 text-center font-league_spartan text-lg">
        Some personal and fun projects I put together on my spare time
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="col-span-1 mb-auto mt-auto hidden h-auto bg-gradient-to-r from-[#9A687B] to-[#380C1D4D] p-2 md:block">
          <div className="bg-transparent_black p-5">
            <p className="text-center font-league_spartan text-xl text-white lg:text-3xl">More coming soon...</p>
          </div>
        </div>
        {projects.map((item: any, index: any) => (
          <ExperimentItem
            key={index}
            title={item.title}
            description={item.description}
            tags={item.techs}
            url={item.link}
            repo={item.repoLink}
          />
        ))}
        <div className="col-span-1 mb-auto mt-auto bg-gradient-to-r from-[#04D361CC] to-[#04D36133] p-2">
          <div className="bg-transparent_black p-5">
            <p className="hidden text-center font-league_spartan text-xl text-white md:block lg:text-3xl">
              Coming soon...
            </p>
            <p className="block text-center font-league_spartan text-xl text-white md:hidden lg:text-3xl">
              More coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiments;
