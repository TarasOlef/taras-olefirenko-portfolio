export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  highlights: string[];
  status: string;
  accent: "cyan" | "violet" | "blue";
  links: {
    caseStudy: string;
    live?: string;
    repo?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "peakr",
    name: "PEAKR",
    category: "App móvil con IA publicada en Google Play",
    description:
      "Aplicación móvil para controlar calorías, hábitos y progreso personal con una experiencia clara, IA aplicada y arquitectura full-stack.",
    stack: [
      "Flutter",
      "Dart",
      "Supabase",
      "PostgreSQL",
      "Edge Functions",
      "APIs",
      "IA",
      "PostHog",
      "RevenueCat",
      "Google Play",
      "Testing / QA",
      "Release",
    ],
    highlights: [
      "App publicada en Google Play",
      "Arquitectura full-stack",
      "IA integrada en flujos reales",
    ],
    status: "Producto publicado",
    accent: "cyan",
    links: {
      caseStudy: "/projects/peakr",
      live: "#",
    },
  },
  {
    slug: "aida",
    name: "AIDA",
    category: "Automatización con IA",
    description:
      "Automatización para reducir trabajo repetitivo y convertir procesos manuales en flujos claros.",
    stack: ["Next.js", "TypeScript", "LLM APIs", "Edge Functions", "Supabase"],
    highlights: [
      "IA con utilidad real",
      "Menos trabajo manual",
      "Flujos controlados",
    ],
    status: "Arquitectura en preparación",
    accent: "violet",
    links: {
      caseStudy: "/projects/aida",
      repo: "#",
    },
  },
  {
    slug: "internal-ticketing",
    name: "Sistema interno de ticketing",
    category: "Software empresarial / gestión de incidencias",
    description:
      "Aplicación interna con C#, ASP.NET Core, EF Core y SQL Server para centralizar incidencias, roles, métricas y auditoría dentro de una organización grande.",
    stack: ["C#", "ASP.NET Core", "EF Core", "SQL Server", "Razor Pages"],
    highlights: [
      "Roles y permisos",
      "Métricas automáticas",
      "Auditoría y trazabilidad",
    ],
    status: "Case study completo",
    accent: "blue",
    links: {
      caseStudy: "/projects/internal-ticketing",
      repo: "https://github.com/TarasOlef/picdaTicketing.git",
    },
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
