import { FaLinkedin, FaGithub } from "react-icons/fa6";

const Social = () => {
    return (
        <div className="text-white flex cursor-pointer items-center space-x-5 text-lg">
            <FaLinkedin className="text-white transition-all hover:text-blue" />
            <FaGithub className="text-white transition-all hover:text-blue" />
        </div>
    );
};

export default Social;
