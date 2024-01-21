"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="container mx-auto font-league_spartan">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="self-center">
          <h4 className="mb-3 text-2xl">Hello, I am</h4>
          <h1 className="mb-3 text-5xl font-bold lg:text-6xl">Caio Salvador</h1>
          <h2 className="mb-8 text-2xl lg:text-4xl">
            A Full-stack Developer with experience on Digital Marketing and Data Analysis
          </h2>
          <button
            className="inline-block rounded-lg bg-blue px-6 py-2 text-lg text-white transition-all hover:bg-blueTint"
            onClick={() => document.getElementById("contact")!.scrollIntoView({ behavior: "smooth", block: "start" })}
          >
            Contact me
          </button>
        </div>
        <div className="hidden md:flex">
          <Image className="ml-auto" src="images/hero.svg" alt="Hero Illustration" width={506} height={368} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
