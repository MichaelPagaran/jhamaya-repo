import { Button } from "@/components/ui";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center py-24 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                Hi, I&apos;m <span className="text-indigo-600">Your Name</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-gray-500">
                A full-stack developer passionate about building beautiful and performant web
                applications.
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
