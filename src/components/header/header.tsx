import Image from "next/image";
import Navbar from "./navbar/navbar";
import Social from "../social/social";

export default function Header() {
  return (
    <header className="py-5">
      <div className="container mx-auto flex justify-between">
        <Image src="/images/logo.svg" alt="Caio Salvador Logo" width={190} height={42} />
        <div className="flex space-x-14">
          <Navbar />
          <Social />
        </div>
      </div>
    </header>
  );
}
