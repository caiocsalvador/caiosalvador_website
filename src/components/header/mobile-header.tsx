import { useState } from "react";
import Social from "../social/social";
import Navbar from "./navbar/navbar";
import { FaBars } from "react-icons/fa6";

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex lg:hidden">
      <Social />
      <div className="my-auto ml-10" onClick={() => setIsOpen(!isOpen)}>
        <FaBars className="text-2xl" />
      </div>
      <div className={isOpen ? "flex" : "hidden"}>
        <Navbar onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default MobileHeader;
