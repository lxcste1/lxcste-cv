import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { translations } from "@/lib/translations";

export default async function LangLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  const langKey = (lang === "es" ? "es" : "en") as "es" | "en";
  const t = translations[langKey];

  return (
    <>
      <Header nav={t.nav} lang={langKey} />
      {children}
      <Footer rights={t.footer.rights} />
    </>
  );
}
