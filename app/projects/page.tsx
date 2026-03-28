"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ProjectCard } from "@/components/project-card";
import { useLanguage } from "@/lib/language-context";

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Page Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t.projects.title}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.projects.items.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies as unknown as string[]}
                url={project.url}
                imageUrl={project.imageUrl}
                status={project.status as "active" | "development"}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
