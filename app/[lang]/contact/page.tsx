import { Suspense } from "react";
import { translations } from "@/lib/translations";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { FormSkeleton } from "@/components/form-skeleton";

export function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  const langKey = (lang === "es" ? "es" : "en") as "es" | "en";
  const t = translations[langKey];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-24 pb-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-xl border border-border bg-card p-6">
                <ContactInfo labels={t.contact.info} />
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <Suspense fallback={<FormSkeleton />}>
                  <ContactForm labels={t.contact.form} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
