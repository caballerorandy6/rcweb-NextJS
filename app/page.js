import Image from "next/image";
import Hero from "./ui/components/Hero";
import Experience from "./ui/components/Experience";
import Projects from "./ui/components/Projects";
import About from "./ui/components/About";
import Contact from "./ui/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Experience />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
