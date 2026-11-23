import { Navbar, Footer } from "@/components/layout";
import BentoHome from "@/components/sections/BentoHome";
import { getAllProjects } from "@/lib/projects";

export default async function Home() {
    const projects = await getAllProjects();

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <BentoHome projects={projects} />
            </main>
            <Footer />
        </div>
    );
}
