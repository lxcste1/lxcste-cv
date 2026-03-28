"use client";

import { useLanguage } from "@/lib/language-context";
import { Code2, Wrench } from "lucide-react";

const skillsData = {
  advanced: ["ReactJS", "NextJS", "TypeScript", "Tailwind CSS"],
  intermediate: ["Firebase"],
  basic: ["AngularJS", "NodeJS", "C", "Python", "PHP", "MySQL"],
};

const toolsData = [
  "Git",
  "GitHub",
  "GitLab",
  "Azure DevOps",
  "Bitbucket",
  "Jira",
  "Figma",
  "Postman",
  "Strapi",
  "Cursor",
];

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <Code2 className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">{t.skills.title}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {t.skills.advanced}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.advanced.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium border border-primary/20 hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-foreground" />
                {t.skills.intermediate}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.intermediate.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                {t.skills.basic}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillsData.basic.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-muted text-muted-foreground font-medium border border-border hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Wrench className="h-4 w-4 text-primary" />
              {t.skills.tools}
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {toolsData.map((tool) => (
                <div
                  key={tool}
                  className="px-4 py-3 rounded-lg bg-card text-foreground border border-border hover:border-primary/50 transition-colors flex items-center gap-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
