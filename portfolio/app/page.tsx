"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Cyber Incident & Management",
    desc: "Simplified a security operations workflow designed to help SOC Teams review alerts, create cases, investigate incidents, and track response progress.",
    tag: "Security Ops",
  },
  {
    id: 2,
    title: "Cyber Risk Management",
    desc: "Designed a clearer workflow for a complex risk process across assessment, treatment, and monitoring.",
    tag: "Risk Design",
  },
  {
    id: 3,
    title: "Sniff and Detect",
    desc: "Designed a security scanning experience that simplifies technical results for all users.",
    tag: "UX Research",
  },
  {
    id: 4,
    title: "Data Visibility Platform",
    desc: "Built an intuitive dashboard that transforms complex data streams into actionable insights for non-technical stakeholders.",
    tag: "Dashboard",
  },
  {
    id: 5,
    title: "Identity Access Portal",
    desc: "Redesigned the user onboarding flow for an enterprise IAM system, reducing setup time by 60%.",
    tag: "Enterprise UX",
  },
];

const marqueeItems = [
  "UX Design", "Product Design", "Design Systems", "User Research",
  "Interaction Design", "Prototyping", "Figma", "Usability Testing",
];

const s = {
  bg: "#faf9f6",
  fg: "#1e1c1a",
  accent: "#2a5cff",
  accentGlow: "rgba(42,92,255,0.13)",
  muted: "#a09e96",
  muted2: "#c8c5bc",
  cardBg: "#f0ede8",
  cardHover: "#242220",
  border: "#e2dfd8",
  surface: "#f5f2ed",
  white: "#fff",
};

export default function Home() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring = cursorRingRef.current;
    if (!cursor || !ring) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let rafId: number;
    const move = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      rafId = requestAnimationFrame(animate);
    };
    const onEnter = () => { cursor.classList.add("hovering"); ring.classList.add("hovering"); };
    const onLeave = () => { cursor.classList.remove("hovering"); ring.classList.remove("hovering"); };
    document.addEventListener("mousemove", move);
    rafId = requestAnimationFrame(animate);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });
    return () => { document.removeEventListener("mousemove", move); cancelAnimationFrame(rafId); };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".anim").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const navItems = ["Home", "Projects", "Journal", "About Me"];

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={cursorRingRef} className="cursor-ring" />

      {/* NAV */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "14px 52px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(250,249,246,0.96)" : "rgba(250,249,246,0.88)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? s.border : "transparent"}`,
        boxShadow: scrolled ? "0 2px 24px rgba(30,28,26,0.07)" : "none",
        transition: "background .3s ease, border-bottom .3s ease, box-shadow .3s ease",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div style={{
            width: "32px", height: "32px", background: s.accent,
            borderRadius: "8px", display: "flex", alignItems: "center",
            justifyContent: "center", fontWeight: 900, color: "#fff", fontSize: "14px",
            fontFamily: "'DM Sans', sans-serif",
          }}>J</div>
          <nav style={{
            display: "flex", gap: "2px",
            background: s.surface, borderRadius: "100px", padding: "4px",
          }}>
            {navItems.map((item) => (
              <button key={item} onClick={() => setActiveNav(item)} style={{
                padding: "6px 18px", borderRadius: "100px", border: "none",
                background: activeNav === item ? s.white : "transparent",
                color: activeNav === item ? s.fg : s.muted,
                fontSize: "13px",
                fontWeight: activeNav === item ? 600 : 400,
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: activeNav === item ? "0 1px 4px rgba(30,28,26,0.07)" : "none",
                transition: "all .2s ease",
              }}>{item}</button>
            ))}
          </nav>
        </div>
        <button
          style={{
            padding: "10px 24px", background: s.fg, color: s.bg,
            border: "none", borderRadius: "100px", fontSize: "13px",
            fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.01em", transition: "background .2s ease",
          }}
          onMouseEnter={(e) => { (e.target as HTMLElement).style.background = s.accent; }}
          onMouseLeave={(e) => { (e.target as HTMLElement).style.background = s.fg; }}
        >Contact Me</button>
      </header>

      <main>
        {/* HERO */}
        <section style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          justifyContent: "flex-end", padding: "0 52px 88px", paddingTop: "100px",
          position: "relative", overflow: "hidden",
        }}>
          {/* Soft radial glow */}
          <div style={{
            position: "absolute", top: "30%", left: "55%",
            width: "700px", height: "700px",
            background: `radial-gradient(circle, ${s.accentGlow} 0%, transparent 65%)`,
            pointerEvents: "none", transform: "translate(-50%,-50%)",
          }} />
          {/* Ghost watermark */}
          <div className="display" style={{
            position: "absolute", top: "50%", right: "-60px",
            transform: "translateY(-52%)",
            fontSize: "clamp(180px, 30vw, 420px)",
            color: "transparent",
            WebkitTextStroke: `1px ${s.border}`,
            lineHeight: 1, pointerEvents: "none", userSelect: "none",
          }}>UX</div>
          {/* Blue dot */}
          <div style={{
            position: "absolute", top: "22%", right: "25%",
            width: "9px", height: "9px",
            background: s.accent, borderRadius: "50%",
            boxShadow: `0 0 16px ${s.accentGlow}`,
          }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "860px" }}>
            <p className="anim d1" style={{
              fontSize: "11px", fontWeight: 700,
              letterSpacing: "0.16em", textTransform: "uppercase",
              color: s.accent, marginBottom: "24px",
            }}>Product Designer — Available for work</p>

            <h1 className="display anim d2" style={{
              fontSize: "clamp(60px, 9.5vw, 130px)",
              lineHeight: 0.93, letterSpacing: "-0.01em", marginBottom: "32px",
            }}>
              Bringing{" "}
              <span style={{ color: s.accent }}>clarity</span>
              <br />to technical
              <br />products through
              <br />
              <span style={{ WebkitTextStroke: `2px ${s.fg}`, color: "transparent" }}>design.</span>
            </h1>

            <p className="anim d3" style={{
              fontSize: "18px", color: s.muted,
              maxWidth: "460px", lineHeight: 1.75,
            }}>Designing the interfaces that make highly technical software easy to use. Focused on security systems, data tools, and enterprise products.</p>

            <div className="anim d4" style={{ display: "flex", gap: "14px", marginTop: "44px" }}>
              <button style={{
                padding: "14px 34px", background: s.accent, color: "#fff",
                border: "none", borderRadius: "100px", fontSize: "14px",
                fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
                transition: "transform .15s ease, box-shadow .15s ease",
              }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.transform = "translateY(-2px)";
                  (e.target as HTMLElement).style.boxShadow = `0 10px 28px rgba(42,92,255,0.28)`;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.transform = "translateY(0)";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              >View Projects →</button>
              <button style={{
                padding: "14px 34px", background: "transparent",
                color: s.fg, border: `1.5px solid ${s.border}`,
                borderRadius: "100px", fontSize: "14px",
                fontWeight: 500, fontFamily: "'DM Sans', sans-serif",
                transition: "border-color .2s ease",
              }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.borderColor = s.muted2; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.borderColor = s.border; }}
              >About Me</button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="anim d5" style={{
            position: "absolute", bottom: "44px", right: "52px",
            display: "flex", flexDirection: "column", alignItems: "center", gap: "8px",
          }}>
            <span style={{ fontSize: "10px", color: s.muted2, letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
            <div style={{ width: "1px", height: "48px", background: `linear-gradient(to bottom, ${s.muted2}, transparent)` }} />
          </div>
        </section>

        {/* MARQUEE */}
        <div style={{
          borderTop: `1px solid ${s.border}`,
          borderBottom: `1px solid ${s.border}`,
          padding: "14px 0", overflow: "hidden",
          background: s.cardHover,
        }}>
          <div style={{
            display: "flex", gap: "48px",
            animation: "marquee 20s linear infinite",
            whiteSpace: "nowrap",
          }}>
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} style={{
                fontSize: "11px", fontWeight: 600,
                color: i % 3 === 0 ? s.accent : "rgba(250,249,246,0.7)",
                letterSpacing: "0.07em", textTransform: "uppercase", flexShrink: 0,
              }}>{item} ✦</span>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <section style={{ padding: "120px 52px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }}>
            <div>
              <p className="anim d1" style={{
                fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: s.muted, marginBottom: "12px",
              }}>Selected Work</p>
              <h2 className="display anim d2" style={{ fontSize: "clamp(44px, 5.5vw, 80px)", lineHeight: 0.93, fontWeight: "bold" }}>
                Projects I've <br /><span style={{ color: s.accent }}>Led & Designed</span>
              </h2>
            </div>
            <span className="anim d3" style={{ fontSize: "12px", color: s.muted, fontWeight: 500, paddingBottom: "6px", }}>
              0{projects.length} cases
            </span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
            {projects.slice(0, 3).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "10px", marginTop: "10px" }}>
            {projects.slice(3).map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + 3} wide />
            ))}
          </div>
        </section>

        {/* PROCESS */}
        <section style={{ padding: "120px 52px", background: s.cardHover }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p className="anim d1" style={{
              fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: s.accent, marginBottom: "12px",
            }}>Process</p>
            <h2 className="display anim d2" style={{
              fontSize: "clamp(44px, 5.5vw, 80px)", lineHeight: 0.93,
              color: s.bg, marginBottom: "72px",
            }}>
              How{" "}
              <span style={{ WebkitTextStroke: `1.5px ${s.bg}`, color: "transparent" }}>Ideas</span>
              {" "}Take Shape
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px" }}>
              {[
                { num: "01", title: "Discover", desc: "Deep dives into user needs, technical constraints, and business goals." },
                { num: "02", title: "Define", desc: "Synthesizing research into clear problem statements and design principles." },
                { num: "03", title: "Design", desc: "Rapid prototyping, iteration, and high-fidelity execution in Figma." },
                { num: "04", title: "Deliver", desc: "Collaborating with engineers, validating with users, and shipping with impact." },
              ].map((step, i) => (
                <div key={step.num} className={`anim d${i + 1}`} data-hover="true" style={{
                  padding: "40px 28px",
                  borderLeft: "1px solid rgba(250,249,246,0.08)",
                  transition: "background .2s ease",
                }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(42,92,255,0.07)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  <div className="display" style={{
                    fontSize: "64px", color: s.accent,
                    opacity: 0.35, lineHeight: 1, marginBottom: "20px",
                  }}>{step.num}</div>
                  <h3 style={{ fontSize: "18px", fontWeight: 700, color: s.bg, marginBottom: "10px" }}>{step.title}</h3>
                  <p style={{ fontSize: "14px", color: "rgba(250,249,246,0.42)", lineHeight: 1.72 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "140px 52px", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)", width: "700px", height: "700px",
            background: `radial-gradient(circle, ${s.accentGlow} 0%, transparent 68%)`,
            pointerEvents: "none",
          }} />
          <p className="anim d1" style={{
            fontSize: "10px", fontWeight: 700, letterSpacing: "0.18em",
            textTransform: "uppercase", color: s.muted, marginBottom: "20px",
          }}>Let's Work Together</p>
          <h2 className="display anim d2" style={{
            fontSize: "clamp(52px, 8.5vw, 112px)", lineHeight: 0.93, marginBottom: "48px",
          }}>
            Got a project<br />
            <span style={{ color: s.accent }}>in mind?</span>
          </h2>
          <button className="anim d3" style={{
            padding: "18px 52px", background: s.fg, color: s.bg,
            border: "none", borderRadius: "100px",
            fontSize: "15px", fontWeight: 600, fontFamily: "'DM Sans', sans-serif",
            letterSpacing: "0.01em", transition: "all .2s ease",
          }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = s.accent;
              (e.target as HTMLElement).style.transform = "scale(1.03)";
              (e.target as HTMLElement).style.boxShadow = `0 12px 32px rgba(42,92,255,0.25)`;
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = s.fg;
              (e.target as HTMLElement).style.transform = "scale(1)";
              (e.target as HTMLElement).style.boxShadow = "none";
            }}
          >Let's Talk →</button>
        </section>

        {/* FOOTER */}
        <footer style={{
          padding: "36px 52px", borderTop: `1px solid ${s.border}`,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ fontSize: "13px", color: s.muted }}>© 2025 Designer Portfolio. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            {["LinkedIn", "Dribbble", "Twitter"].map((link) => (
              <a key={link} href="#" style={{
                fontSize: "13px", color: s.muted, textDecoration: "none",
                transition: "color .2s ease",
              }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = s.accent; }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = s.muted; }}
              >{link}</a>
            ))}
          </div>
        </footer>
      </main>
    </>
  );
}

function ProjectCard({
  project, index, wide = false,
}: {
  project: (typeof projects)[0];
  index: number;
  wide?: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`anim d${Math.min(index + 1, 6)}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover="true"
      style={{
        background: hovered ? "#242220" : "#f0ede8",
        padding: wide ? "52px 44px" : "44px 36px",
        transition: "background .3s ease",
        aspectRatio: wide ? "auto" : "4/3",
        display: "flex", flexDirection: "column", justifyContent: "space-between",
        position: "relative", overflow: "hidden",
        borderRadius: "16px",
        cursor: "none",
      }}
    >
      {/* Top accent */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2.5px",
        background: "linear-gradient(90deg, #2a5cff, #7a9cff)",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform .35s ease",
        borderRadius: "16px 16px 0 0",
      }} />

      <div>
        <span style={{
          display: "inline-block", fontSize: "10px", fontWeight: 700,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: hovered ? "#7a9cff" : "#a09e96",
          border: `1px solid ${hovered ? "rgba(122,156,255,0.4)" : "#e2dfd8"}`,
          padding: "4px 11px", borderRadius: "100px",
          marginBottom: "20px", transition: "all .3s ease",
        }}>{project.tag}</span>

        <h3 style={{
          fontSize: wide ? "26px" : "20px", fontWeight: 700, lineHeight: 1.25,
          color: hovered ? "#faf9f6" : "#1e1c1a",
          marginBottom: "14px", transition: "color .3s ease",
        }}>{project.title}</h3>

        <p style={{
          fontSize: "14px", lineHeight: 1.74,
          color: hovered ? "rgba(250,249,246,0.45)" : "#a09e96",
          maxWidth: "380px", transition: "color .3s ease",
        }}>{project.desc}</p>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between",
        alignItems: "center", marginTop: "36px",
      }}>
        <span style={{
          fontSize: "13px", fontWeight: 600,
          color: hovered ? "#7a9cff" : "#a09e96",
          letterSpacing: "0.02em", transition: "color .3s ease",
        }}>View Case Study →</span>
        <div style={{
          width: "38px", height: "38px", borderRadius: "50%",
          background: hovered ? "#2a5cff" : "#e2dfd8",
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "all .3s ease",
          transform: hovered ? "rotate(-45deg)" : "rotate(0deg)",
        }}>
          <span style={{ color: hovered ? "#fff" : "#a09e96", fontSize: "15px" }}>↗</span>
        </div>
      </div>
    </div>
  );
}
