"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  nav: { home: string; projects: string; contact: string };
}

export function MobileMenu({ nav }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="md:hidden text-foreground"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {open && (
        <div className="md:hidden pt-4 pb-2 border-t border-border mt-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {nav.home}
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {nav.projects}
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpen(false)}
            >
              {nav.contact}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
