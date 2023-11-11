import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";

type AboutProps = {
  text: string;
  image: string;
  linkedin: string;
  github: string;
};

const About = ({ text, image, linkedin, github }: AboutProps) => {
  linkedin = "https://www.linkedin.com/in/caio-c%C3%A9sar-salvador-santos-3a622b94/";
  github = "https://github.com/caiocsalvador";
  image = "/images/caio.png";
  text = `
  I'm a Full-stack Developer with over 10 years experience, bachelor in information systems. Passionate about technology and always looking for new challenges and opportunities to improve and learn new skills. During my careers I've worked with a wide range of technologies and frameworks which helped me to become more adaptive, trying to always use the best tool for the job. I'm currently working with React, Next.js, and Node.js. 
  
  A Brazilian who loves to travel and experience new cultures. Living in Ireland for the last 6 years. I'm a big fan of sports, especially football but the stereotypes ended there unfortunatly, I'm a terrible dancer and Samba is not my cup of tea. I also love to play video games, once an almost semi-professional Starcraft player and sometimes I try to develop my own games for fun. I'm also interested in learning more about Go and C++.

  I created this website to have a place to throw my ideas and fun projects. I'll try to keep updating it as often as possible. But you know how developers are, we are always busy with something else.

  If you want to know more about me or just want to have a chat, feel free to contact me.
  
  Thank you
  `;

  return (
    <div className="mx-auto w-[850px]">
      <h2 className="mb-10 text-center text-6xl font-semibold">About me</h2>
      <div className="from-about_gcolor1 to-about_gcolor2 grid grid-cols-3 gap-2 bg-gradient-to-r">
        <div className="bg-transparent_black col-span-2 flex flex-col justify-center p-10">
          <p className="text-xl">{text}</p>
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
