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
      <section className="px-4 py-10 pt-10 md:py-20 md:pt-36 lg:px-0">
        <Hero />
      </section>
      <section className="px-4 py-10 md:py-20 lg:px-0">
        <Skills />
      </section>
      <section className="px-4 py-10 md:py-20 lg:px-0">
        <Experience />
      </section>
      <section className="px-4 py-10 md:py-20 lg:px-0">
        <About />
      </section>
      <section className="px-4 py-10 md:py-20 lg:px-0">
        <Experiments />
      </section>
      <section className="px-4 py-10 md:py-20 lg:px-0">
        <Contact />
      </section>
    </main>
  );
}
