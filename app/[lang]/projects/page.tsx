import { translations } from "@/lib/translations";
import { ProjectCard } from "@/components/project-card/ProjectCard";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ProjectsPage({ params }: PageProps) {
  const { lang } = await params;
  const langKey = (lang === "es" ? "es" : "en") as "es" | "en";
  const t = translations[langKey];

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.projects.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                url={project.url}
                imageUrl={project.imageUrl}
                status={project.status}
                labels={{
                  inDevelopment: t.projects.inDevelopment,
                  comingSoon: t.projects.comingSoon,
                  viewProject: t.projects.viewProject,
                }}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
