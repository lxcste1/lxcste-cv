import Link from "next/link";
import { Suspense } from "react";
import { Github, Linkedin } from "lucide-react";
import { LanguageSwitcher } from "@/components/language-switcher/LanguageSwitcher";
import { MobileMenu } from "@/components/mobile-menu/MobileMenu";

interface HeaderProps {
  nav: { home: string; projects: string; contact: string };
  lang: string;
}

export function Header({ nav, lang }: Readonly<HeaderProps>) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link
            href={`/${lang}`}
            className="flex-1 text-xl font-bold text-foreground hover:text-primary transition-colors"
          >
            LT
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href={`/${lang}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {nav.home}
            </Link>
            <Link
              href={`/${lang}/projects`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {nav.projects}
            </Link>
            <Link
              href={`/${lang}/contact`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {nav.contact}
            </Link>
          </div>

          <div className="hidden md:flex md:flex-1 items-center justify-end gap-4">
            <a
              href="https://github.com/lxcste1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/tellolucas/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <div className="ml-4">
              <Suspense fallback={<div className="bg-secondary rounded-full p-1 inline-flex gap-1"><button className="px-3 py-1 rounded-full text-sm font-medium bg-primary text-primary-foreground">ES</button><button className="px-3 py-1 rounded-full text-sm font-medium text-muted-foreground">EN</button></div>}>
                <LanguageSwitcher />
              </Suspense>
            </div>
          </div>

          <MobileMenu nav={nav} />
        </nav>
      </div>
    </header>
  );
}
