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
      live: "https://play.google.com/store/apps/details?id=com.taras.peakr",
    },
  },
  {
    slug: "estilia",
    name: "EstilIA",
    category: "Web app con IA / Fashion tech",
    description:
      "Web app que analiza outfits a partir de una foto y ofrece recomendaciones prácticas para mejorar estilo, coherencia visual y decisión de compra.",
    stack: ["Next.js", "TypeScript", "React", "IA", "APIs", "UX", "Producto digital"],
    highlights: [
      "Análisis visual con IA",
      "Recomendaciones accionables",
      "Web app en producción",
      "Flujo simple desde foto a resultado",
    ],
    status: "Web app en producción",
    accent: "violet",
    links: {
      caseStudy: "/projects/estilia",
      live: "https://estilia.es",
    },
  },
  {
    slug: "fabrica-muebles",
    name: "Fábrica de Muebles / Sistema operativo interno",
    category: "Operaciones internas / software de gestión",
    description:
      "Sistema operativo interno para ordenar procesos, información y seguimiento en un entorno de fabricación, con foco en claridad operativa y mantenimiento.",
    stack: ["Next.js", "TypeScript", "Gestión interna", "Dashboards", "Procesos"],
    highlights: [
      "Operativa centralizada",
      "Seguimiento interno",
      "Pensado para equipos",
    ],
    status: "Caso de estudio en preparación",
    accent: "blue",
    links: {
      caseStudy: "/projects/fabrica-muebles",
      repo: "#",
    },
  },
  {
    slug: "internal-ticketing",
    name: "Sistema interno de ticketing",
    category: "Software empresarial / gestión de incidencias",
    description:
      "Aplicación interna con C#, ASP.NET Core, EF Core y SQL Server para centralizar incidencias, roles, métricas y auditoría dentro de una organización grande.",
    stack: ["C#", "ASP.NET Core Razor Pages", "Entity Framework Core", "SQL Server", "Roles"],
    highlights: [
      "Roles y permisos",
      "Métricas automáticas",
      "Auditoría y trazabilidad",
    ],
    status: "Caso de estudio completo",
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
