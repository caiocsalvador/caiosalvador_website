import Image from "next/image";
import Hero from "../components/hero/hero";
import Skills from "@/components/skills/skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Skills />
    </main>
  );
}
