import Link from "next/link";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

type ExperimentItemProps = {
  title: string;
  description: string;
  tags: string[];
  // icon: string;
  url: string;
  repo: string;
};

const ExperimentItem = ({ title, description, tags, url, repo }: ExperimentItemProps) => {
  return (
    <Link href={url} target="_blank">
      <div className="bg-gradient-to-r from-[#268EC5] to-[#268EC533] p-2">
        <div className="bg-transparent_black p-3 lg:p-5">
          <div className="flex justify-between">
            <Link href={repo} target="_blank">
              <FaGithub className="text-gray-500 h-4 w-4 transition-all hover:text-blue lg:h-7 lg:w-7" />
            </Link>
            <Link href={repo} target="_blank">
              <FaArrowUpRightFromSquare className="text-gray-500 h-4 w-4 transition-all hover:text-blue  lg:h-7 lg:w-7" />
            </Link>
          </div>
          <h3 className="mb-3 mt-4 font-league_spartan text-xl font-semibold lg:mb-5 lg:mt-8 lg:text-4xl">{title}</h3>
          <p className="lg:text-md text-sm">{description}</p>
          <div className="mt-3 flex flex-row flex-wrap lg:mt-6">
            {tags.map((tag, index) => (
              <p key={index} className="mr-4 font-semibold leading-8 md:max-xl:text-sm md:max-xl:leading-6">
                {tag}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ExperimentItem;
