"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface MobileMenuProps {
  nav: { home: string; projects: string; contact: string };
  lang: string;
}

const EMAIL = "lucastello97@gmail.com";

export function MobileMenu({ nav, lang }: MobileMenuProps) {
  const links = [
    { href: `/${lang}`, label: nav.home },
    { href: `/${lang}/projects`, label: nav.projects },
    { href: `/${lang}/contact`, label: nav.contact },
  ];

  const socials = [
    { href: "https://github.com/lxcste1", label: "GitHub", icon: Github },
    {
      href: "https://linkedin.com/in/tellolucas/",
      label: "LinkedIn",
      icon: Linkedin,
    },
  ];

  const socialLabel = lang === "es" ? "Redes" : "Social";

  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <button className="text-foreground" aria-label="Toggle menu">
          <Menu className="h-6 w-6" />
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="flex items-center gap-2 text-base font-medium">
            <Mail className="h-4 w-4" />
            <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
              {EMAIL}
            </a>
          </DrawerTitle>
          <DrawerDescription>Buenos Aires, Argentina</DrawerDescription>
        </DrawerHeader>

        <nav className="flex flex-col gap-6 px-6 pb-8">
          <div className="flex flex-col gap-5">
            {links.map(({ href, label }) => (
              <DrawerClose key={href} asChild>
                <Link
                  href={href}
                  className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </Link>
              </DrawerClose>
            ))}
          </div>

          <div className="h-px bg-border" />

          <div className="flex flex-col gap-3">
            <span className="text-sm font-medium text-muted-foreground">
              {socialLabel}
            </span>
            <div className="flex flex-col gap-4">
              {socials.map(({ href, label, icon: Icon }) => (
                <DrawerClose key={href} asChild>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </a>
                </DrawerClose>
              ))}
            </div>
          </div>
        </nav>
      </DrawerContent>
    </Drawer>
  );
}
