import Link from "next/link";
import { NAV_LINKS } from "@/constants";

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
            <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-lg font-bold text-indigo-600">
                    Portfolio
                </Link>
                <ul className="flex items-center gap-6 text-sm text-gray-600">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="hover:text-indigo-600 transition-colors">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
