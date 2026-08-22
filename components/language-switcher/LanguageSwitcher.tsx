"use client";

import { useRouter, useParams } from "next/navigation";

export function LanguageSwitcher() {
  const router = useRouter();
  const params = useParams<{ lang: string }>();
  const currentLang = params.lang ?? "es";

  const switchTo = (lang: string) => {
    if (lang !== currentLang) {
      router.push(`/${lang}`);
    }
  };

  return (
    <div className="language-switcher" aria-label="Language selector">
      <button
        type="button"
        className={currentLang === "es" ? "is-active" : ""}
        onClick={() => switchTo("es")}
        aria-pressed={currentLang === "es"}
      >
        ES
      </button>
      <button
        type="button"
        className={currentLang === "en" ? "is-active" : ""}
        onClick={() => switchTo("en")}
        aria-pressed={currentLang === "en"}
      >
        EN
      </button>
    </div>
  );
}
