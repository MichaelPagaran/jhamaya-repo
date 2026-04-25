import { Button } from "@/components/ui";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center py-24 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                Hi, <span className="text-indigo-600">bb</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-500">
                I love you very much. Please use this repository as a learning instrument to gain insights on how modern web app works. A lot of people believe in you. Don't give up. I'm always here for you.
            </p>
            <div className="mt-8 flex gap-4">
                <Link href="/projects">
                    <Button>View Projects</Button>
                </Link>
                <Link href="#about">
                    <Button variant="secondary">About Me</Button>
                </Link>
            </div>
        </section>
    );
}
