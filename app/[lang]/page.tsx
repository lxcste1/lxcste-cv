import { translations } from "@/lib/translations";
import { localizedExperience, localizedTechnology } from "@/lib/resume-data";
import { SectionHeading } from "@/components/section-heading";
import {
  ArrowUpRight,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  const langKey = lang === "es" || lang === "en" ? lang : "es";
  const t = translations[langKey];
  const exp = localizedExperience[langKey];
  const tech = localizedTechnology[langKey];

  return (
    <div className="resume-shell">
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">{t.resume.hero.eyebrow}</p>
            <h1>{t.resume.hero.heading}</h1>
            <p className="hero-summary">{t.resume.hero.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {t.resume.hero.cta} <ArrowUpRight size={16} />
              </a>
              <a
                className="button button-quiet"
                href="mailto:lucastello97@gmail.com"
              >
                <Mail size={16} /> {t.resume.hero.contact}
              </a>
            </div>
          </div>
          <aside
            className="currently-card"
            aria-label={t.resume.currently.ariaLabel}
          >
            <p className="card-label">{t.resume.currently.label}</p>
            <ul>
              {t.resume.currently.items.map((item, i) => (
                <li key={i}>
                  <span>0{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </section>

        <section className="statement-grid">
          <div>
            <p className="eyebrow">{t.resume.profile.eyebrow}</p>
            <p className="statement">{t.resume.profile.statement}</p>
          </div>
          <div className="contact-lines">
            <a
              href="https://github.com/lxcste1"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> github.com/lxcste1 <ArrowUpRight size={14} />
            </a>
            <a
              href="https://linkedin.com/in/tellolucas/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> linkedin.com/in/tellolucas{" "}
              <ArrowUpRight size={14} />
            </a>
            <span>
              <MapPin size={16} /> {t.resume.openToRemote}
            </span>
          </div>
        </section>

        <section className="section" id="experience">
          <SectionHeading
            eyebrow={t.resume.experienceSection.eyebrow}
            title={t.resume.experienceSection.title}
          />
          <div className="experience-list">
            {exp.map((item) => (
              <article className="experience-item" key={item.company}>
                <div className="experience-meta">
                  <strong>{item.company}</strong>
                  <span>{item.period}</span>
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.description}</p>
                  <div className="tags">
                    {item.stack.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section expertise-section">
          <SectionHeading
            eyebrow={t.resume.expertise.eyebrow}
            title={t.resume.expertise.title}
          />
          <div className="expertise-grid">
            {t.resume.expertise.items.map((item, index) => (
              <div key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="section ai-section">
          <div className="ai-heading">
            <Sparkles size={19} />
            <p>{t.resume.ai.eyebrow}</p>
          </div>
          <div>
            <h2>{t.resume.ai.heading}</h2>
            <p>{t.resume.ai.description}</p>
            <div className="ai-tags">
              <span>SDD</span>
              <span>OpenSpec</span>
              <span>OpenCode</span>
              <span>AI agents</span>
              <span>Prompt engineering</span>
              <span>v0</span>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <SectionHeading
            eyebrow={t.resume.projectsSection.eyebrow}
            title={t.resume.projectsSection.title}
          />
          <div className="project-feature">
            <div className="project-number">01</div>
            <div className="project-body">
              <div className="project-title-row">
                <div>
                  <p className="eyebrow">
                    {t.resume.projectsSection.flagship.label}
                  </p>
                  <h3>{t.resume.projectsSection.flagship.title}</h3>
                </div>
                <Code2 size={24} />
              </div>
              <p className="project-description">
                {t.resume.projectsSection.flagship.description}
              </p>
              <div className="project-details">
                <div>
                  <span>
                    {t.resume.projectsSection.flagship.details.architecture}
                  </span>
                  <strong>
                    {t.resume.projectsSection.flagship.details.archValue}
                  </strong>
                </div>
                <div>
                  <span>{t.resume.projectsSection.flagship.details.stack}</span>
                  <strong>
                    {t.resume.projectsSection.flagship.details.stackValue}
                  </strong>
                </div>
                <div>
                  <span>{t.resume.projectsSection.flagship.details.focus}</span>
                  <strong>
                    {t.resume.projectsSection.flagship.details.focusValue}
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="project-rows">
            <a
              href="https://origendelsur.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <span>02</span>
              <strong>{t.resume.projectsSection.rows[0].title}</strong>
              <p>{t.resume.projectsSection.rows[0].description}</p>
              <ArrowUpRight size={18} />
            </a>
            <a
              href="https://www.team-builder.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <span>03</span>
              <strong>{t.resume.projectsSection.rows[1].title}</strong>
              <p>{t.resume.projectsSection.rows[1].description}</p>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="section technology-section">
          <SectionHeading
            eyebrow={t.resume.technology.eyebrow}
            title={t.resume.technology.title}
          />
          <div className="technology-grid">
            {tech.map(([category, ...items]) => (
              <div key={category}>
                <h3>{category}</h3>
                <p>{items.join(" / ")}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="education-strip">
          <div>
            <p>{t.resume.education.label}</p>
            <strong>{t.resume.education.degree}</strong>
            <span>{t.resume.education.period}</span>
          </div>
          <div>
            <p>{t.resume.education.foundation}</p>
            <strong>{t.resume.education.foundationRole}</strong>
            <span>{t.resume.education.foundationDesc}</span>
          </div>
          <a href={`${lang}/contact`}>
            {t.resume.cta} <ArrowUpRight size={18} />
          </a>
        </section>
      </main>
    </div>
  );
}
