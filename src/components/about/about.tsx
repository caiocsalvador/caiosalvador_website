import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import Social from "../social/social";

type AboutProps = {
  text: string;
  image: string;
  linkedin: string;
  github: string;
};

const About = ({ text, image, linkedin, github }: AboutProps) => {
  return (
    <div className="mx-auto w-[850px]">
      <h2 className="mb-10 text-center font-league_spartan text-6xl font-semibold">About me</h2>
      <div className="grid grid-cols-3 gap-2 bg-gradient-to-r from-about_gcolor1 to-about_gcolor2">
        <div className="col-span-2 flex flex-col justify-center bg-transparent_black p-10">
          <p>{text}</p>
        </div>
        <div className="flex flex-col p-5 pt-10">
          <div className="rounded-full bg-white p-1">
            <Image src={image} alt="Caio Salvador" className="rounded-full" width={250} height={250} />
          </div>
          <div className="mt-12 flex flex-row justify-center">
            <Social size={8} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
