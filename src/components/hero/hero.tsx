import Image from "next/image";

const Hero = () => {
  return (
    <section className="pt-36">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-6">
          <div className="self-center">
            <h4 className="mb-3 text-2xl">Hello, my name is</h4>
            <h1 className="mb-3 text-6xl font-bold">Caio Salvador</h1>
            <h2 className="mb-6 text-4xl">
              A Full-stack Developer with experience on Digital Marketing and Data Analysis
            </h2>
            <a
              href="/"
              className="text-white upp inline-block rounded-lg bg-blue px-6 py-2 text-lg font-bold transition-all hover:bg-blueTint"
            >
              Contact me
            </a>
          </div>
          <div className="flex">
            <Image className="ml-auto" src="images/hero.svg" alt="Hero Illustration" width={506} height={368} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
