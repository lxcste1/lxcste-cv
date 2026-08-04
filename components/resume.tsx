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
  const tr = (es: string, en: string) => (language === "es" ? es : en);
  const localizedExperience = language === "es"
    ? [
        { ...experience[0], role: "Ingeniero Frontend", period: "Abr 2024 - Actualidad", description: "Desarrollo y evoluciono librerias reutilizables de componentes React para los productos digitales de La Nacion. Participo en el rediseÃ±o de Canchallena y entrego funcionalidades con foco en mantenibilidad, performance y accesibilidad." },
        { ...experience[1], role: "Desarrollador Frontend", period: "Ago 2023 - Ene 2024", description: "Desarrolle y mantuve experiencias ecommerce personalizadas para retailers de Peru en VTEX IO, colaborando con distintos equipos para entregar componentes confiables y alineados con cada marca." },
        { ...experience[2], role: "Desarrollador Frontend", period: "Abr 2021 - Ago 2023", description: "Implemente funcionalidades ecommerce, integraciones de APIs e interfaces responsive. Colabore en la migracion de tiendas de VTEX Legacy a VTEX IO y en la mejora de patrones reutilizables." },
      ]
    : experience;
  const localizedExpertise = language === "es"
    ? ["Arquitectura Frontend", "Design Systems", "Ingenieria de Producto", "Performance y Core Web Vitals", "SEO Tecnico", "Desarrollo Aumentado con IA"]
    : expertise;
  const localizedTechnologies = language === "es"
    ? [["Frontend", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"], ["Sistemas de UI", "shadcn/ui", "Radix UI", "Storybook", "Design Systems", "CVA"], ["Datos y estado", "Supabase", "PostgreSQL", "Firebase", "Zustand", "React Query"], ["Calidad", "Playwright", "Jest", "Accesibilidad", "SEO", "Core Web Vitals"]]
    : technologies;

  return (
    <div className="resume-shell">
      <header className="resume-nav">
        <Link href="/" className="monogram" aria-label="Lucas Tello home">LT</Link>
        <nav aria-label="Primary navigation">
          <a href="#experience">{tr("Experiencia", "Experience")}</a>
          <a href="#projects">{tr("Proyectos", "Projects")}</a>
          <a href="#contact">{tr("Contacto", "Contact")}</a>
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
          <span /> {tr("Disponible para oportunidades", "Available for opportunities")}
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{tr("Ingeniero frontend / Buenos Aires, Argentina", "Frontend engineer / Buenos Aires, Argentina")}</p>
            <h1>{tr("Construyendo productos digitales con sistemas frontend modernos.", "Building considered digital products with modern frontend systems.")}</h1>
            <p className="hero-summary">
              {tr("Soy Lucas Tello, Ingeniero Frontend con mas de 5 aÃ±os de experiencia creando aplicaciones web escalables, librerias reutilizables de componentes y experiencias de producto con React, Next.js y TypeScript.", "I'm Lucas Tello, a Frontend Engineer with 5+ years of experience building scalable web applications, reusable component libraries and product experiences with React, Next.js and TypeScript.")}
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">{tr("Ver proyectos seleccionados", "Explore selected work")} <ArrowUpRight size={16} /></a>
              <a className="button button-quiet" href="mailto:lucastello97@gmail.com"><Mail size={16} /> {tr("Contactame", "Get in touch")}</a>
            </div>
          </div>
          <aside className="currently-card" aria-label={tr("En este momento", "Current focus")}>
            <p className="card-label">{tr("Actualmente", "Currently")}</p>
            <ul>
              <li><span>01</span>{tr(" Construyendo sistemas frontend compartidos en La Nacion", " Building shared frontend systems at La Nacion")}</li>
              <li><span>02</span>{tr(" Desarrollando Slotify, un SaaS multi-tenant", " Developing Slotify, a multi-tenant SaaS")}</li>
              <li><span>03</span>{tr(" Integrando IA al flujo de ingenieria", " Integrating AI into the engineering workflow")}</li>
            </ul>
          </aside>
        </section>

        <section className="statement-grid">
          <div>
            <p className="eyebrow">{tr("Perfil", "Profile")}</p>
            <p className="statement">{tr("Combino pensamiento de producto con oficio frontend: desde arquitectura de componentes y design systems hasta performance, SEO y los detalles que hacen que una interfaz se sienta natural.", "I pair product thinking with frontend craft - from component architecture and design systems to performance, SEO and the details that make an interface feel inevitable.")}</p>
          </div>
          <div className="contact-lines">
            <a href="https://github.com/lxcste1" target="_blank" rel="noreferrer"><Github size={16} /> github.com/lxcste1 <ArrowUpRight size={14} /></a>
            <a href="https://linkedin.com/in/tellolucas/" target="_blank" rel="noreferrer"><Linkedin size={16} /> linkedin.com/in/tellolucas <ArrowUpRight size={14} /></a>
            <span><MapPin size={16} /> {tr("Abierto a oportunidades remotas", "Open to remote opportunities")}</span>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading eyebrow={tr("01 / Experiencia", "01 / Experience")} title={tr("Experiencia entregando interfaces utiles y escalables.", "A track record of shipping useful, scalable interfaces.")} />
          <div className="experience-list">
            {localizedExperience.map((item) => (
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
          <SectionHeading eyebrow={tr("02 / Especialidad", "02 / Expertise")} title={tr("Los problemas de ingenieria que disfruto resolver.", "The engineering problems I enjoy owning.")} />
          <div className="expertise-grid">
            {localizedExpertise.map((item, index) => <div key={item}><span>0{index + 1}</span><h3>{item}</h3></div>)}
          </div>
        </section>

        <section className="section ai-section">
          <div className="ai-heading"><Sparkles size={19} /><p>{tr("03 / Ingenieria con IA", "03 / AI Engineering")}</p></div>
          <div>
            <h2>{tr("La IA es parte de mi sistema de desarrollo, no una etiqueta.", "AI is part of my development system, not a feature label.")}</h2>
            <p>{tr("Uso Specification Driven Development, OpenSpec, OpenCode y agentes especializados para hacer mas deliberados el planning, la implementacion, la documentacion y el review. El objetivo son mejores decisiones y software de mayor calidad, no atajos.", "I use Specification Driven Development, OpenSpec, OpenCode and specialized agents to make planning, implementation, documentation and review more deliberate. The goal is clearer decisions and higher-quality software, not shortcuts.")}</p>
            <div className="ai-tags"><span>SDD</span><span>OpenSpec</span><span>OpenCode</span><span>AI agents</span><span>Prompt engineering</span><span>v0</span></div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading eyebrow={tr("04 / Proyectos seleccionados", "04 / Selected work")} title={tr("Proyectos construidos a partir del problema.", "Projects built from the problem outward.")} />
          <div className="project-feature">
            <div className="project-number">01</div>
            <div className="project-body">
              <div className="project-title-row"><div><p className="eyebrow">{tr("Proyecto principal / En desarrollo", "Flagship project / In development")}</p><h3>Slotify</h3></div><Code2 size={24} /></div>
              <p className="project-description">{tr("Una plataforma SaaS multi-tenant para negocios basados en turnos: centros de estetica, pilates y gimnasios. DiseÃ±ada desde cero con configuracion por organizacion, acceso por roles, reservas online y una experiencia administrativa enfocada en la operacion.", "A multi-tenant SaaS platform for appointment-based businesses: beauty studios, pilates centers and gyms. Designed from the ground up around organization-level configuration, role-based access, online booking and an operations-focused admin experience.")}</p>
              <div className="project-details"><div><span>Architecture</span><strong>Multi-tenant SaaS</strong></div><div><span>Stack</span><strong>Next.js / TypeScript / Supabase</strong></div><div><span>Focus</span><strong>Reusable systems / Product UX</strong></div></div>
            </div>
          </div>
          <div className="project-rows">
            <a href="https://origendelsur.com.ar/" target="_blank" rel="noreferrer"><span>02</span><strong>Origen del Sur</strong><p>{tr("Experiencia ecommerce enfocada en identidad visual, SEO y una compra sin friccion.", "Commerce experience shaped around visual identity, SEO and a frictionless purchase path.")}</p><ArrowUpRight size={18} /></a>
            <a href="https://www.team-builder.com.ar/" target="_blank" rel="noreferrer"><span>03</span><strong>Team Builder</strong><p>{tr("Aplicacion de gestion de equipos y partidos con una interfaz practica y centrada en el jugador.", "Team and match-management application with a practical, player-first interface.")}</p><ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="section technology-section">
          <SectionHeading eyebrow={tr("05 / Herramientas", "05 / Toolkit")} title={tr("Tecnologias elegidas para entregar productos confiables.", "Tools chosen for dependable product delivery.")} />
          <div className="technology-grid">
            {localizedTechnologies.map(([category, ...items]) => <div key={category}><h3>{category}</h3><p>{items.join(" / ")}</p></div>)}
          </div>
        </section>

        <section className="education-strip">
          <div><p>{tr("Educacion", "Education")}</p><strong>{tr("Ingenieria en Informatica", "Computer Science Engineering")}</strong><span>UNDAV / 2019 - {tr("Actualidad", "Present")}</span></div>
          <div><p>{tr("Base", "Foundation")}</p><strong>{tr("Operaciones de Infraestructura", "Infrastructure Operations")}</strong><span>{tr("Sistemas, disponibilidad y monitoreo", "Systems, availability and monitoring")}</span></div>
          <a href="mailto:lucastello97@gmail.com">{tr("Construyamos algo con criterio", "Let's build something considered")} <ArrowUpRight size={18} /></a>
        </section>
      </main>

      <footer id="contact">
        <div><p>Lucas Tello</p><span>{tr("Ingeniero Frontend", "Frontend Engineer")}</span></div>
        <div className="footer-links"><a href="mailto:lucastello97@gmail.com">lucastello97@gmail.com</a><a href="https://github.com/lxcste1" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/tellolucas/" target="_blank" rel="noreferrer">LinkedIn</a></div>
        <span>(c) {new Date().getFullYear()}</span>
      </footer>
    </div>
  );
}

