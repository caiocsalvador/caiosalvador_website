import Link from "next/link";
import { FaX } from "react-icons/fa6";

type NavbarProps = {
  onClose: Function;
};

const Navbar = ({ onClose }: NavbarProps) => {
  return (
    <div className="absolute right-0 top-0 flex w-[200px] items-start rounded-lg bg-gradient-to-r from-navy from-100% to-red p-5 lg:relative lg:top-0 lg:w-auto  lg:items-center lg:rounded-none lg:bg-transparent lg:from-transparent lg:p-0">
      <FaX className="absolute right-2 top-2 block text-2xl lg:hidden" onClick={onClose} />
      <nav className="flex flex-col text-lg lg:flex-row lg:space-x-14">
        <a
          className="cursor-pointer transition-all hover:text-blue"
          onClick={() => {
            document.getElementById("skills")!.scrollIntoView({ behavior: "smooth", block: "start" }), onClose();
          }}
        >
          Skills
        </a>
        <a
          className="cursor-pointer transition-all hover:text-blue"
          onClick={() => {
            document.getElementById("experience")!.scrollIntoView({ behavior: "smooth", block: "start" }), onClose();
          }}
        >
          Experience
        </a>
        <a
          className="cursor-pointer transition-all hover:text-blue"
          onClick={() => {
            document.getElementById("about")!.scrollIntoView({ behavior: "smooth", block: "start" }), onClose();
          }}
        >
          About me
        </a>
        <a
          className="cursor-pointer transition-all hover:text-blue"
          onClick={() => {
            document.getElementById("experiments")!.scrollIntoView({ behavior: "smooth", block: "start" }), onClose();
          }}
        >
          Experiments
        </a>
        <a
          className="cursor-pointer transition-all hover:text-blue"
          onClick={() => {
            document.getElementById("contact")!.scrollIntoView({ behavior: "smooth", block: "start" }), onClose();
          }}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
