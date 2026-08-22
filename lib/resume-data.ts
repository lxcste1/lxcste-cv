import type { ExperienceItem } from "@/types/resume";

export const experience: ExperienceItem[] = [
  {
    company: "La Nacion",
    role: "Frontend Engineer",
    period: "Apr 2024 - Present",
    description:
      "Build and evolve reusable React component libraries used across La Nacion's digital products. Contribute to Canchallena's redesign and ship product features with a focus on maintainability, performance and accessible user experiences.",
    stack: ["React", "TypeScript", "Component libraries", "Performance"],
  },
  {
    company: "PinApp",
    role: "Frontend Developer",
    period: "Aug 2023 - Jan 2024",
    description:
      "Developed and maintained custom ecommerce experiences for major Peruvian retailers on VTEX IO, collaborating across teams to deliver reliable, brand-specific storefront components.",
    stack: ["React", "VTEX IO", "Styled Components"],
  },
  {
    company: "TOBS",
    role: "Frontend Developer",
    period: "Apr 2021 - Aug 2023",
    description:
      "Delivered ecommerce features, API integrations and responsive interfaces. Helped migrate storefronts from VTEX Legacy to VTEX IO while improving reusable frontend patterns.",
    stack: ["React", "Next.js", "VTEX IO", "REST APIs"],
  },
];

export const localizedExperience: Record<"es" | "en", ExperienceItem[]> = {
  en: experience,
  es: [
    {
      ...experience[0],
      role: "Ingeniero Frontend",
      period: "Abr 2024 - Actualidad",
      description:
        "Desarrollo y evoluciono librerias reutilizables de componentes React para los productos digitales de La Nacion. Participo en el rediseño de Canchallena y entrego funcionalidades con foco en mantenibilidad, performance y accesibilidad.",
    },
    {
      ...experience[1],
      role: "Desarrollador Frontend",
      period: "Ago 2023 - Ene 2024",
      description:
        "Desarrolle y mantuve experiencias ecommerce personalizadas para retailers de Peru en VTEX IO, colaborando con distintos equipos para entregar componentes confiables y alineados con cada marca.",
    },
    {
      ...experience[2],
      role: "Desarrollador Frontend",
      period: "Abr 2021 - Ago 2023",
      description:
        "Implemente funcionalidades ecommerce, integraciones de APIs e interfaces responsive. Colabore en la migracion de tiendas de VTEX Legacy a VTEX IO y en la mejora de patrones reutilizables.",
    },
  ],
};

const technologyCategories: [string, ...string[]][] = [
  ["Frontend", "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  ["UI systems", "shadcn/ui", "Radix UI", "Storybook", "Design Systems", "CVA"],
  [
    "Data & state",
    "Supabase",
    "PostgreSQL",
    "Firebase",
    "Zustand",
    "React Query",
  ],
  ["Quality", "Playwright", "Jest", "Accessibility", "SEO", "Core Web Vitals"],
];

export const localizedTechnology: Record<"es" | "en", [string, ...string[]][]> =
  {
    en: technologyCategories,
    es: [
      [
        "Frontend",
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
      ],
      [
        "Sistemas de UI",
        "shadcn/ui",
        "Radix UI",
        "Storybook",
        "Design Systems",
        "CVA",
      ],
      [
        "Datos y estado",
        "Supabase",
        "PostgreSQL",
        "Firebase",
        "Zustand",
        "React Query",
      ],
      [
        "Calidad",
        "Playwright",
        "Jest",
        "Accesibilidad",
        "SEO",
        "Core Web Vitals",
      ],
    ],
  };
