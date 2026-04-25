import {
  HeroSection,
  MarqueeSection,
  ProjectsSection,
  ProcessSection,
  CTASection,
} from "@/components/sections";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ProjectsSection projects={projects} />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
