"use client";

import { useLanguage } from "@/lib/language-context";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-12">
          <GraduationCap className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold text-foreground">
            {t.education.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {t.education.degree}
                </h3>
                <p className="text-primary font-medium">{t.education.university}</p>
                <p className="text-sm text-muted-foreground font-mono mt-1">
                  {t.education.period}
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              {t.education.certifications}
            </h3>
            <div className="space-y-3">
              {t.education.certs.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg p-4 border border-border hover:border-primary/50 transition-colors"
                >
                  <h4 className="font-medium text-foreground">{cert.name}</h4>
                  <p className="text-sm text-primary">{cert.institution}</p>
                  <p className="text-xs text-muted-foreground font-mono mt-1">
                    {cert.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
