import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout";
import ProductCarousel from "@/components/widgets/ProductCarousel";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import { getCaseStudies } from "@/lib/caseStudies";

export async function generateStaticParams() {
    const [projects, caseStudies] = await Promise.all([
        getAllProjects(),
        getCaseStudies(),
    ]);
    return [...projects, ...caseStudies].map((item) => ({
        slug: item.slug,
    }));
}

interface ProjectDetailPageProps {
    params: Promise<{ slug: string }>;
}

/**
 * Editorial Project Case Study Detail Page (`/projects/[slug]`)
 * Modeled directly after `https://www.marco.fyi/work/dotos` and `https://www.marco.fyi/work/careers-at-commanddot`:
 * - Large bold title + muted subtitle + thin full-width horizontal divider
 * - 2-column metadata grid:
 *   - Left column: `MY ROLE`, `TEAMMATE`, `TOOLS`, `TIMELINE`
 *   - Right column: `DESCRIPTION` and `CONTEXT` paragraphs
 * - `Intro` section with editorial body paragraphs
 * - `marco.fyi/work/careers-at-commanddot`-inspired Bento Box Image Showcase Grid for multi-image brand/product showcases
 */
export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const isTripleWhisk = project.slug === "triplewisk";
    const isDayungLogo = project.screenshots?.[0]?.includes("dayung-logo-color-full");

    return (
        <div className="min-h-screen bg-white text-[#111111]">
            <Navbar />

            <main className="mx-auto w-full max-w-[1160px] px-[24px] pb-[120px] pt-[12px] sm:px-[48px]">
                {/* Editorial Text Column (max-w-[880px] centered like marco.fyi) */}
                <div className="mx-auto w-full max-w-[880px]">
                    {/* Back to Projects breadcrumb */}
                    <div className="bento-enter stagger-1 mb-[32px]">
                        <Link
                            href="/projects"
                            className="font-inter inline-flex items-center gap-[6px] text-[13px] font-medium text-[#8a8a8e] no-underline transition-colors hover:text-[#111111]"
                        >
                            <span>←</span>
                            <span>Back to Projects</span>
                        </Link>
                    </div>

                    {/* ─── HEADER: TITLE + SUBTITLE + DIVIDER (Exact DotOS / CommandDot layout) ─── */}
                    <header className="bento-enter stagger-2 border-b border-[#e5e5e5] pb-[24px]">
                        <h1 className="font-inter text-[40px] font-bold leading-[1.12] tracking-[-0.03em] text-[#111111] sm:text-[48px]">
                            {project.title}
                        </h1>
                        <p className="font-inter mt-[10px] text-[18px] font-normal leading-[1.45] tracking-[-0.01em] text-[#8a8a8e] sm:text-[21px]">
                            {project.subtitle || project.tag}
                        </p>
                    </header>

                    {/* ─── 2-COLUMN METADATA & CONTEXT GRID ─── */}
                    <section className="bento-enter stagger-3 mt-[36px] grid grid-cols-1 gap-y-[36px] sm:grid-cols-[190px_1fr] sm:gap-x-[48px]">
                        {/* Left Column: MY ROLE, TEAMMATE, TOOLS, TIMELINE */}
                        <div className="flex flex-col gap-[28px]">
                            <div>
                                <h2 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                    MY ROLE
                                </h2>
                                <p className="font-inter mt-[6px] text-[15.5px] font-normal leading-[1.5] text-[#111111]">
                                    {project.role || "Product Designer"}
                                </p>
                            </div>

                            <div>
                                <h2 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                    TEAMMATE
                                </h2>
                                <p className="font-inter mt-[6px] text-[15.5px] font-normal leading-[1.5] text-[#111111]">
                                    {project.teammate || "Cross-Functional Product Team"}
                                </p>
                            </div>

                            <div>
                                <h2 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                    TOOLS
                                </h2>
                                <p className="font-inter mt-[6px] text-[15.5px] font-normal leading-[1.5] text-[#111111]">
                                    {project.tools || "Figma"}
                                </p>
                            </div>

                            <div>
                                <h2 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                    TIMELINE
                                </h2>
                                <p className="font-inter mt-[6px] text-[15.5px] font-normal leading-[1.5] text-[#111111]">
                                    {project.timeline || project.year || project.date}
                                </p>
                            </div>
                        </div>

                        {/* Right Column: DESCRIPTION & CONTEXT */}
                        <div className="flex flex-col gap-[32px]">
                            <div>
                                <h2 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                    DESCRIPTION
                                </h2>
                                <p className="font-inter mt-[8px] text-[16.5px] font-normal leading-[1.68] text-[#1d1d1f]">
                                    {project.description}
                                </p>
                            </div>

                            {project.context && project.context.length > 0 && (
                                <div>
                                    <h2 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                        CONTEXT
                                    </h2>
                                    <div className="mt-[8px] flex flex-col gap-[18px]">
                                        {project.context.map((paragraph, idx) => (
                                            <p
                                                key={idx}
                                                className="font-inter text-[16.5px] font-normal leading-[1.68] text-[#1d1d1f]"
                                            >
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>

                {/* ─── BENTO BOX VISUAL SHOWCASE (marco.fyi/work/careers-at-commanddot style) ─── */}
                {isTripleWhisk ? (
                    <section className="bento-enter stagger-4 mt-[56px] w-full">
                        {/* 6-Tile Bento Grid modeled after marco.fyi/work/careers-at-commanddot */}
                        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-12">
                            {/* Tile 1 (7 cols): Primary Golden-Honey Logo & Whisk-Dotted Wordmark */}
                            <div className="bento-card group relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-[26px] border border-[#e5e5e5] bg-[#f7f7f9] p-[36px] md:col-span-7 sm:min-h-[440px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/triplewhisk/logo-wordmark.png"
                                    alt="TripleWhisk Primary Logo and Wordmark"
                                    className="h-auto w-[320px] max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105 sm:w-[390px]"
                                />
                            </div>

                            {/* Tile 2 (5 cols): Hand-Textured Golden Whisk Illustration on Deep Espresso Cocoa */}
                            <div className="bento-card group relative min-h-[380px] overflow-hidden rounded-[26px] border border-[#3a2419] bg-[#362218] md:col-span-5 sm:min-h-[440px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/triplewhisk/illustration-dark.jpg"
                                    alt="TripleWhisk Hand-Textured Emblem"
                                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />
                            </div>

                            {/* Tile 3 (5 cols): Tactile Flour-Dusted Stencil on Wooden Pastry Table */}
                            <div className="bento-card group relative min-h-[380px] overflow-hidden rounded-[26px] border border-[#e5e0da] bg-[#4a3325] md:col-span-5 sm:min-h-[500px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/triplewhisk/flour-wood-stencil.jpg"
                                    alt="TripleWhisk Flour Stencil on Wood Table"
                                    className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                />
                            </div>

                            {/* Tile 4 (7 cols): Instagram Teaser Post - Zoomed in, Pure Transparent Background */}
                            <div className="group relative flex min-h-[380px] items-center justify-center bg-transparent md:col-span-7 sm:min-h-[500px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/triplewhisk/ig-now-whisking.png"
                                    alt="TripleWhisk Instagram Launch Post"
                                    className="h-auto w-full max-w-[520px] object-contain drop-shadow-[0_16px_38px_rgba(0,0,0,0.09)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                />
                            </div>

                            {/* Tile 5 (6 cols): Instagram Post - "Ba-ba-babanana" Fresh Banana Bread (Zoomed in, Pure Transparent) */}
                            <div className="group relative flex min-h-[380px] items-center justify-center bg-transparent md:col-span-6 sm:min-h-[500px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/triplewhisk/ig-banana-bread.png"
                                    alt="TripleWhisk Banana Bread Social Post"
                                    className="h-auto w-full max-w-[520px] object-contain drop-shadow-[0_16px_38px_rgba(0,0,0,0.09)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                />
                            </div>

                            {/* Tile 6 (6 cols): Instagram Post - "Hello Neighbour! We have something for you." (Zoomed in, Pure Transparent) */}
                            <div className="group relative flex min-h-[380px] items-center justify-center bg-transparent md:col-span-6 sm:min-h-[500px]">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src="/triplewhisk/ig-neighbour-brownies.png"
                                    alt="TripleWhisk Hello Neighbour Brownies Post"
                                    className="h-auto w-full max-w-[520px] object-contain drop-shadow-[0_16px_38px_rgba(0,0,0,0.09)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </section>
                ) : (
                    project.screenshots &&
                    project.screenshots.length > 0 && (
                        <section className="bento-enter stagger-4 mx-auto mt-[56px] flex w-full max-w-[880px] flex-col gap-[24px]">
                            {isDayungLogo ? (
                                /* Full Dayung Logo with Wordmark Hero Specimen (No UI/UX screens) */
                                <div className="flex min-h-[280px] flex-col items-center justify-center overflow-hidden rounded-[24px] border border-[#e5e5e5] bg-[#f7f7f9] p-[40px] sm:min-h-[340px] sm:p-[64px]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/figma/dayung-logo-color-full.svg"
                                        alt="Dayung Logo with Wordmark"
                                        className="h-auto w-[280px] max-w-full object-contain drop-shadow-[0_12px_28px_rgba(52,155,182,0.22)] sm:w-[380px]"
                                    />
                                </div>
                            ) : project.category === "product-design" ? (
                                <ProductCarousel
                                    images={project.screenshots}
                                    title={project.title}
                                />
                            ) : (
                                <div className="flex items-center justify-center overflow-hidden rounded-[24px] border border-[#e5e5e5] bg-[#f7f7f9] p-[28px] sm:p-[48px]">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={project.screenshots[0]}
                                        alt={`${project.title} preview`}
                                        className="max-h-[460px] w-auto max-w-full rounded-[12px] object-contain"
                                    />
                                </div>
                            )}
                        </section>
                    )
                )}

                {/* ─── INTRO & DETAILS SECTION (max-w-[880px] centered) ─── */}
                <div className="mx-auto w-full max-w-[880px]">
                    <section className="bento-enter stagger-5 mt-[64px]">
                        <h2 className="font-inter text-[28px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#111111]">
                            Intro
                        </h2>

                        <div className="mt-[22px] flex flex-col gap-[20px]">
                            {project.intro && project.intro.length > 0 ? (
                                project.intro.map((paragraph, idx) => (
                                    <p
                                        key={idx}
                                        className="font-inter text-[16.5px] font-normal leading-[1.72] text-[#1d1d1f]"
                                    >
                                        {paragraph}
                                    </p>
                                ))
                            ) : (
                                <p className="font-inter text-[16.5px] font-normal leading-[1.72] text-[#1d1d1f]">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    </section>

                    {/* ─── OPTIONAL CHALLENGE / WHAT I DID / OUTCOME / KPIS ─── */}
                    {(project.challenge ||
                        project.whatIDid ||
                        project.outcome ||
                        (project.kpis && project.kpis.length > 0)) && (
                        <section className="bento-enter stagger-6 mt-[56px] border-t border-[#e5e5e5] pt-[48px]">
                            {project.kpis && project.kpis.length > 0 && (
                                <div className="mb-[44px] grid grid-cols-1 gap-[16px] sm:grid-cols-2">
                                    {project.kpis.map((kpi, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col rounded-[20px] bg-[#f7f7f9] px-[28px] py-[24px]"
                                        >
                                            <span className="font-inter text-[36px] font-bold leading-none tracking-[-0.03em] text-[#111111]">
                                                {kpi.value}
                                            </span>
                                            <span className="font-inter mt-[8px] text-[12px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                                {kpi.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-col gap-[32px]">
                                {project.challenge && (
                                    <div>
                                        <h3 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                            THE CHALLENGE
                                        </h3>
                                        <p className="font-inter mt-[8px] text-[16.5px] font-normal leading-[1.7] text-[#1d1d1f]">
                                            {project.challenge}
                                        </p>
                                    </div>
                                )}
                                {project.whatIDid && (
                                    <div>
                                        <h3 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                            APPROACH &amp; EXECUTION
                                        </h3>
                                        <p className="font-inter mt-[8px] text-[16.5px] font-normal leading-[1.7] text-[#1d1d1f]">
                                            {project.whatIDid}
                                        </p>
                                    </div>
                                )}
                                {project.outcome && (
                                    <div>
                                        <h3 className="font-inter text-[11px] font-semibold uppercase tracking-[0.06em] text-[#8a8a8e]">
                                            OUTCOME
                                        </h3>
                                        <p className="font-inter mt-[8px] text-[16.5px] font-normal leading-[1.7] text-[#1d1d1f]">
                                            {project.outcome}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
}
