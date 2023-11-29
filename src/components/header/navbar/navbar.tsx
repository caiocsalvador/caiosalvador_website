import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center space-x-14 text-lg">
      <a
        className="cursor-pointer transition-all hover:text-blue"
        onClick={() => document.getElementById("skills")!.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        Skills
      </a>
      <a
        className="cursor-pointer transition-all hover:text-blue"
        onClick={() => document.getElementById("experience")!.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        Experience
      </a>
      <a
        className="cursor-pointer transition-all hover:text-blue"
        onClick={() => document.getElementById("about")!.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        About me
      </a>
      <a
        className="cursor-pointer transition-all hover:text-blue"
        onClick={() => document.getElementById("experiments")!.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        Experiments
      </a>
      <a
        className="cursor-pointer transition-all hover:text-blue"
        onClick={() => document.getElementById("contact")!.scrollIntoView({ behavior: "smooth", block: "start" })}
      >
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
