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
        <div className="bg-transparent_black p-5">
          <div className="flex justify-between">
            <Link href={repo} target="_blank">
              <FaGithub className="text-gray-500 h-7 w-7 transition-all hover:text-blue" />
            </Link>
            <Link href={repo} target="_blank">
              <FaArrowUpRightFromSquare className="text-gray-500 h-7 w-7 transition-all hover:text-blue" />
            </Link>
          </div>
          <h3 className="mb-5 mt-8 font-league_spartan text-4xl font-semibold">{title}</h3>
          <p>{description}</p>
          <div className="mt-10 flex flex-row">
            {tags.map((tag, index) => (
              <p key={index} className="mr-4 font-semibold">
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
