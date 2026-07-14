import {
  HeroSection,
  MarqueeSection,
  ProjectsSection,
  CaseStudiesSection,
  ProcessSection,
  CTASection,
} from "@/components/sections";
import { Navbar } from "@/components/layout";
import { Footer } from "@/components/layout";
import { getAllProjects } from "@/lib/projects";
import { getCaseStudies } from "@/lib/caseStudies";

export default async function Home() {
  const projects = await getAllProjects();
  const caseStudies = await getCaseStudies();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <ProjectsSection projects={projects} />
        <CaseStudiesSection caseStudies={caseStudies} />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
