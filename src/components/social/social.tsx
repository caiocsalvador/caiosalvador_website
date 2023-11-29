import Link from "next/link";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";

type SocialProps = {
  size?: number;
};

const Social = ({ size }: SocialProps) => {
  return (
    <div className="flex cursor-pointer items-center space-x-5 text-white">
      <Link href="https://www.linkedin.com/in/caio-c%C3%A9sar-salvador-santos-3a622b94/">
        <FaLinkedin className={`h-${size ? size : 5} w-${size ? size : 5} text-white transition-all hover:text-blue`} />
      </Link>
      <Link href="https://www.linkedin.com/in/caio-c%C3%A9sar-salvador-santos-3a622b94/">
        <FaWhatsapp className={`h-${size ? size : 5} w-${size ? size : 5} text-white transition-all hover:text-blue`} />
      </Link>
      <Link href="https://wa.me/3530899505241">
        <FaGithub className={`h-${size ? size : 5} w-${size ? size : 5} text-white transition-all hover:text-blue`} />
      </Link>
    </div>
  );
};

export default Social;
