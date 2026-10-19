import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { WhyUs } from "@/components/WhyUs";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <Services />
      <Projects />
      <WhyUs />
      <Process />
      <Contact />
    </main>
  );
}
