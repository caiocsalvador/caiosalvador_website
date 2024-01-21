import { useState } from "react";
import Social from "../social/social";
import Navbar from "./navbar/navbar";

const DesktopHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="hidden space-x-14 lg:flex">
      <Navbar onClose={() => setIsOpen(false)} />
      <Social />
    </div>
  );
};

export default DesktopHeader;
