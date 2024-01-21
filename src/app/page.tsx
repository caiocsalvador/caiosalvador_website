// Custom components
import Hero from "@/components/hero/hero";
import Skills from "@/components/skills/skills";
import Experience from "@/components/experience/experience";
import About from "@/components/about/about";
import Experiments from "@/components/experiments/experiments";
import Contact from "@/components/contact/contact";

export default function Home() {
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
        <About />
      </section>
      <section className="py-20">
        <Experiments />
      </section>
      <section className="py-20">
        <Contact />
      </section>
    </main>
  );
}
