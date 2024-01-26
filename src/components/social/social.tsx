import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

type SocialProps = {
  size?: "md" | "lg";
};

const Social = ({ size }: SocialProps) => {
  return (
    <div className="flex cursor-pointer items-center space-x-3 text-white sm:space-x-5">
      <a
        href="https://www.linkedin.com/in/caio-c%C3%A9sar-salvador-santos-3a622b94/"
        className={`text-${size === "lg" ? "2xl" : "md"}`}
      >
        <FaLinkedin className={`text-white transition-all hover:text-blue`} />
      </a>
      <a href="https://wa.me/3530899505241" className={`text-${size === "lg" ? "2xl" : "md"}`}>
        <FaWhatsapp className={`text-white transition-all hover:text-blue`} />
      </a>
      <a href="https://github.com/caiocsalvador" className={`text-${size === "lg" ? "2xl" : "md"}`}>
        <FaGithub className={`text-white transition-all hover:text-blue`} />
      </a>
    </div>
  );
};

export default Social;
