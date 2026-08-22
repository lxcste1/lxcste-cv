"use client";

import { useRouter, useParams, usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const params = useParams<{ lang: string }>();
  const pathname = usePathname();
  const currentLang = params.lang ?? "es";

  const switchTo = (lang: string) => {
    if (lang === currentLang) return;
    const segments = pathname.split("/");
    segments[1] = lang;
    router.push(segments.join("/") || `/${lang}`);
  };

  return (
    <div className="language-switcher" aria-label="Language selector">
      <button
        type="button"
        className={currentLang === "en" ? "is-active" : ""}
        onClick={() => switchTo("en")}
        aria-pressed={currentLang === "en"}
      >
        EN
      </button>
      <button
        type="button"
        className={currentLang === "es" ? "is-active" : ""}
        onClick={() => switchTo("es")}
        aria-pressed={currentLang === "es"}
      >
        ES
      </button>
    </div>
  );
}
