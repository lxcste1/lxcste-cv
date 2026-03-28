"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-medium">{t.hero.greeting}</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground text-balance">
                Lucas Tello
              </h1>
              <h2 className="text-2xl md:text-3xl text-accent-foreground font-medium">
                {t.hero.role}
              </h2>
            </div>

            <p className="text-lg text-muted-foreground font-mono">
              {t.hero.stack}
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              {t.hero.description}
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{t.hero.location}</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="group">
                <Link href="/projects">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">{t.hero.contact}</Link>
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-primary/10 absolute -top-4 -left-4" />
              <div className="w-72 h-72 rounded-full bg-accent/20 absolute -bottom-4 -right-4" />
              <div className="relative w-80 h-80 rounded-2xl bg-card border border-border overflow-hidden flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="text-6xl font-bold text-primary">{"<LT/>"}</div>
                  <p className="text-muted-foreground font-mono text-sm">
                    Front-End Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
