import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Social = () => {
  return (
    <div className="text-white flex cursor-pointer items-center space-x-5">
      <FaLinkedin className="text-white h-5 w-5 transition-all hover:text-blue" />
      <FaGithub className="text-white h-5 w-5 transition-all hover:text-blue" />
    </div>
  );
};

export default Social;
