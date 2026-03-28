"use client";

import { useLanguage } from "@/lib/language-context";
import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink } from "lucide-react";

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">
            {t.experience.title}
          </h2>
        </div>

        <div className="space-y-8">
          {t.experience.jobs.map((job, index) => (
            <div
              key={index}
              className="group relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-border group-hover:border-primary transition-colors" />

              <div className="bg-card rounded-lg p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                      {job.role}
                      <span className="text-primary">·</span>
                      <span className="text-primary">{job.company}</span>
                      {job.company === "La Nación" && (
                        <a
                          href="https://canchallena.lanacion.com.ar/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </h3>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">
                    {job.period}
                  </span>
                </div>

                <p className="text-muted-foreground mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
