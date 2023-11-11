import Image from "next/image";
import Hero from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import Experience from "@/components/experience/experience";
import About from "@/components/about/about";
import Experiments from "@/components/experiments/experiments";

export default function Home() {
  const linkedin = "https://www.linkedin.com/in/caio-c%C3%A9sar-salvador-santos-3a622b94/";
  const github = "https://github.com/caiocsalvador";
  const image = "/images/caio.png";
  const text = `
  I'm a Full-stack Developer with over 10 years experience, bachelor in information systems. Passionate about technology and always looking for new challenges and opportunities to improve and learn new skills. During my careers I've worked with a wide range of technologies and frameworks which helped me to become more adaptive, trying to always use the best tool for the job. I'm currently working with React, Next.js, and Node.js. 
  
  A Brazilian who loves to travel and experience new cultures. Living in Ireland for the last 6 years. I'm a big fan of sports, especially football but the stereotypes ended there unfortunatly, I'm a terrible dancer and Samba is not my cup of tea. I also love to play video games, once an almost semi-professional Starcraft player and sometimes I try to develop my own games for fun. I'm also interested in learning more about Go and C++.

  I built this website to have a place to throw my ideas and fun projects. I'll try to keep updating it as often as possible. But you know how developers are, we are always busy with something else.

  If you want to know more about me or just want to have a chat, feel free to contact me.
  
  Thank you
  `;

  return (
    <main className="flex min-h-screen flex-col">
      <section className="py-20 pt-36">
        <Hero />
      </section>
      <section className="py-20">
        <Skills />
      </section>
      <section className="py-20">
        <Experience />
      </section>
      <section className="py-20">
        <About text={text} image={image} linkedin={linkedin} github={github} />
      </section>
      <section className="py-20">
        <Experiments />
      </section>
    </main>
  );
}
