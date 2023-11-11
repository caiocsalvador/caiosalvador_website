import ExperimentItem from "./experiments-item";

const ExperimentItems = [
  {
    title: "This website code",
    description:
      "This website was built using Next.js, TailwindCSS and Typescript. It's hosted on Vercel and the code is available on Github.",
    tags: ["Next.js", "TailwindCSS", "Typescript", "React"],
    url: "https://github.com/caiocsalvador/caiosalvador_website",
  },
];

const Experiments = () => {
  return (
    <div className="container mx-auto">
      <h2 className="font-league_spartan mb-4 text-center text-6xl font-semibold">Experiments</h2>
      <h3 className="font-league_spartan mb-20 text-center text-lg">
        Some personal and fun projects I put together on my spare time
      </h3>
      <div className="grid grid-cols-3 gap-6">
        <div className="col-span-1 mb-auto mt-auto h-auto bg-gradient-to-r from-[#9A687B] to-[#380C1D4D] p-2">
          <div className="bg-transparent_black p-5">
            <p className="font-league_spartan text-white text-center text-3xl">More coming soon...</p>
          </div>
        </div>
        {ExperimentItems.map((item, index) => (
          <ExperimentItem
            key={index}
            title={item.title}
            description={item.description}
            tags={item.tags}
            url={item.url}
          />
        ))}
        <div className="col-span-1 mb-auto mt-auto bg-gradient-to-r from-[#04D361CC] to-[#04D36133] p-2">
          <div className="bg-transparent_black p-5">
            <p className="font-league_spartan text-white text-center text-3xl">I hope</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiments;
