import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

type AboutProps = {
  text: string;
  image: string;
  linkedin: string;
  github: string;
};

const About = ({ text, image, linkedin, github }: AboutProps) => {
  return (
    <div className="mx-auto w-[850px]">
      <h2 className="font-league_spartan mb-10 text-center text-6xl font-semibold">About me</h2>
      <div className="from-about_gcolor1 to-about_gcolor2 grid grid-cols-3 gap-2 bg-gradient-to-r">
        <div className="bg-transparent_black col-span-2 flex flex-col justify-center p-10">
          <p>{text}</p>
        </div>
        <div className="flex flex-col p-5 pt-10">
          <div className="bg-white rounded-full p-1">
            <Image src={image} alt="Caio Salvador" className="rounded-full" width={250} height={250} />
          </div>
          <div className="mt-12 flex flex-row justify-center">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="mr-6">
              <FaLinkedin className="text-white h-8 w-8 transition-all hover:text-blue" />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white h-8 w-8 transition-all hover:text-blue" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
