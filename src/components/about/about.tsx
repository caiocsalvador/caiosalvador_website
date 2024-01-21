import Image from "next/image";
import Social from "../social/social";
import { PortableText } from "@portabletext/react";
import useAboutData from "@/sanity/hooks/useAboutData";

const About = async () => {
  const data = await useAboutData();

  const components = {
    block: ({ children }: any) => <div className="mb-2">{children}</div>,
  };

  return (
    <div className="container relative mx-auto md:w-[850px]">
      <div id="about" className="absolute left-0 top-[-100px]"></div>
      <h2 className="mb-10 text-center font-league_spartan text-5xl font-semibold xl:text-6xl">{data.title}</h2>
      <div className="grid grid-cols-3 gap-2 bg-gradient-to-r from-about_gcolor1 to-about_gcolor2">
        <div className="col-span-2 flex flex-col justify-center bg-transparent_black p-10">
          <PortableText value={data.text} components={components} />
        </div>
        <div className="flex flex-col p-5 pt-10">
          <div className="rounded-full bg-white p-1">
            <Image src={data.imageUrl} alt="Caio Salvador" className="rounded-full" width={250} height={250} />
          </div>
          <div className="mt-12 flex flex-row justify-center">
            <Social size="lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
