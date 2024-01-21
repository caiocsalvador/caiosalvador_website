import Social from "../social/social";
import Navbar from "./navbar/navbar";

const DesktopHeader = () => {
  return (
    <div className="hidden space-x-14 lg:flex">
      <Navbar />
      <Social />
    </div>
  );
};

export default DesktopHeader;
