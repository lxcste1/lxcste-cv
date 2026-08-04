"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";
import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const expertise = [
  "Frontend Architecture",
  "Design Systems",
  "Product Engineering",
  "Performance & Core Web Vitals",
  "Technical SEO",
  "AI-Augmented Development",
];

const experience = [
  {
    company: "La Nacion",
    role: "Frontend Engineer",
    period: "Apr 2024 - Present",
    description:
      "Build and evolve reusable React component libraries used across La Nacion's digital products. Contribute to Canchallena's redesign and ship product features with a focus on maintainability, performance and accessible user experiences.",
    stack: ["React", "TypeScript", "Component libraries", "Performance"],
  },
  {
    company: "PinApp",
    role: "Frontend Developer",
    period: "Aug 2023 - Jan 2024",
    description:
      "Developed and maintained custom ecommerce experiences for major Peruvian retailers on VTEX IO, collaborating across teams to deliver reliable, brand-specific storefront components.",
    stack: ["React", "VTEX IO", "Styled Components"],
  },
  {
    company: "TOBS",
    role: "Frontend Developer",
    period: "Apr 2021 - Aug 2023",
    description:
      "Delivered ecommerce features, API integrations and responsive interfaces. Helped migrate storefronts from VTEX Legacy to VTEX IO while improving reusable frontend patterns.",
    stack: ["React", "Next.js", "VTEX IO", "REST APIs"],
  },
];

const technologies = [
  ["Frontend", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  ["UI systems", "shadcn/ui", "Radix UI", "Storybook", "Design Systems", "CVA"],
  ["Data & state", "Supabase", "PostgreSQL", "Firebase", "Zustand", "React Query"],
  ["Quality", "Playwright", "Jest", "Accessibility", "SEO", "Core Web Vitals"],
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

export function Resume() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="resume-shell">
      <header className="resume-nav">
        <Link href="/" className="monogram" aria-label="Lucas Tello home">LT</Link>
        <nav aria-label="Primary navigation">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="language-switcher" aria-label="Language selector">
          <button
            type="button"
            className={language === "es" ? "is-active" : ""}
            onClick={() => setLanguage("es")}
            aria-pressed={language === "es"}
          >
            ES
          </button>
          <button
            type="button"
            className={language === "en" ? "is-active" : ""}
            onClick={() => setLanguage("en")}
            aria-pressed={language === "en"}
          >
            EN
          </button>
        </div>
        <a className="availability" href="mailto:lucastello97@gmail.com">
          <span /> Available for opportunities
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Frontend engineer / Buenos Aires, Argentina</p>
            <h1>Building considered digital products with modern frontend systems.</h1>
            <p className="hero-summary">
              I'm Lucas Tello, a Frontend Engineer with 5+ years of experience building scalable web applications, reusable component libraries and product experiences with React, Next.js and TypeScript.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore selected work <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href="mailto:lucastello97@gmail.com"><Mail size={16} /> Get in touch</a>
            </div>
          </div>
          <aside className="currently-card" aria-label="Current focus">
            <p className="card-label">Currently</p>
            <ul>
              <li><span>01</span> Building shared frontend systems at La Nacion</li>
              <li><span>02</span> Developing Slotify, a multi-tenant SaaS</li>
              <li><span>03</span> Integrating AI into the engineering workflow</li>
            </ul>
          </aside>
        </section>

        <section className="statement-grid">
          <div>
            <p className="eyebrow">Profile</p>
            <p className="statement">I pair product thinking with frontend craft - from component architecture and design systems to performance, SEO and the details that make an interface feel inevitable.</p>
          </div>
          <div className="contact-lines">
            <a href="https://github.com/lxcste1" target="_blank" rel="noreferrer"><Github size={16} /> github.com/lxcste1 <ArrowUpRight size={14} /></a>
            <a href="https://linkedin.com/in/tellolucas/" target="_blank" rel="noreferrer"><Linkedin size={16} /> linkedin.com/in/tellolucas <ArrowUpRight size={14} /></a>
            <span><MapPin size={16} /> Open to remote opportunities</span>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading eyebrow="01 / Experience" title="A track record of shipping useful, scalable interfaces." />
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-meta"><strong>{item.company}</strong><span>{item.period}</span></div>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                  <div className="tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section expertise-section">
          <SectionHeading eyebrow="02 / Expertise" title="The engineering problems I enjoy owning." />
          <div className="expertise-grid">
            {expertise.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}
          </div>
        </section>

        <section className="section ai-section">
          <div className="ai-heading"><Sparkles size={19} /><p>03 / AI Engineering</p></div>
          <div>
            <h2>AI is part of my development system, not a feature label.</h2>
            <p>I use Specification Driven Development, OpenSpec, OpenCode and specialized agents to make planning, implementation, documentation and review more deliberate. The goal is clearer decisions and higher-quality software, not shortcuts.</p>
            <div className="ai-tags"><span>SDD</span><span>OpenSpec</span><span>OpenCode</span><span>AI agents</span><span>Prompt engineering</span><span>v0</span></div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading eyebrow="04 / Selected work" title="Projects built from the problem outward." />
          <div className="project-feature">
            <div className="project-number">01</div>
            <div className="project-body">
              <div className="project-title-row"><div><p className="eyebrow">Flagship project / In development</p><h3>Slotify</h3></div><Code2 size={24} /></div>
              <p className="project-description">A multi-tenant SaaS platform for appointment-based businesses: beauty studios, pilates centers and gyms. Designed from the ground up around organization-level configuration, role-based access, online booking and an operations-focused admin experience.</p>
              <div className="project-details"><div><span>Architecture</span><strong>Multi-tenant SaaS</strong></div><div><span>Stack</span><strong>Next.js / TypeScript / Supabase</strong></div><div><span>Focus</span><strong>Reusable systems / Product UX</strong></div></div>
            </div>
          </div>
          <div className="project-rows">
            <a href="https://origendelsur.com.ar/" target="_blank" rel="noreferrer"><span>02</span><strong>Origen del Sur</strong><p>Commerce experience shaped around visual identity, SEO and a frictionless purchase path.</p><ArrowUpRight size={18} /></a>
            <a href="https://www.team-builder.com.ar/" target="_blank" rel="noreferrer"><span>03</span><strong>Team Builder</strong><p>Team and match-management application with a practical, player-first interface.</p><ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="section technology-section">
          <SectionHeading eyebrow="05 / Toolkit" title="Tools chosen for dependable product delivery." />
          <div className="technology-grid">
            {technologies.map(([category, ...items]) => <div key={category}><h3>{category}</h3><p>{items.join(" / ")}</p></div>)}
          </div>
        </section>

        <section className="education-strip">
          <div><p>Education</p><strong>Computer Science Engineering</strong><span>UNDAV / 2019 - Present</span></div>
          <div><p>Foundation</p><strong>Infrastructure Operations</strong><span>Systems, availability and monitoring</span></div>
          <a href="mailto:lucastello97@gmail.com">Let's build something considered <ArrowUpRight size={18} /></a>
        </section>
      </main>

      <footer id="contact">
        <div><p>Lucas Tello</p><span>Frontend Engineer</span></div>
        <div className="footer-links"><a href="mailto:lucastello97@gmail.com">lucastello97@gmail.com</a><a href="https://github.com/lxcste1" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/tellolucas/" target="_blank" rel="noreferrer">LinkedIn</a></div>
        <span>(c) {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

